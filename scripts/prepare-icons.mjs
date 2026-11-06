import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = path.join(root, 'assets', 'icons', 'ic_sgy_app_icon.svg');
const output = path.join(root, 'src-tauri', 'icons');
if (!fs.existsSync(source)) throw new Error('The shared Schoology app-icon SVG is missing.');

const command = process.platform === 'win32' ? 'npx.cmd' : 'npx';
const generated = spawnSync(command, ['tauri', 'icon', source, '--output', output], {
  cwd: root,
  stdio: 'inherit',
  shell: process.platform === 'win32'
});
if (generated.error) throw generated.error;
if (generated.status !== 0) throw new Error(`Tauri icon generation failed with exit code ${generated.status ?? 'unknown'}.`);

const copyRequired = (from, to) => {
  if (!fs.existsSync(from) || fs.statSync(from).size === 0) {
    throw new Error(`Tauri did not generate the expected Schoology icon: ${path.relative(root, from)}`);
  }
  fs.copyFileSync(from, to);
};
const assets = path.join(root, 'assets');
copyRequired(path.join(output, 'icon.png'), path.join(assets, 'ic_launcher.png'));
copyRequired(path.join(output, 'icon.ico'), path.join(assets, 'ic_launcher_256.ico'));
copyRequired(path.join(output, 'icon.ico'), path.join(assets, 'ic_launcher.ico'));
copyRequired(path.join(output, 'icon.icns'), path.join(assets, 'ic_launcher.icns'));
const ios1024 = path.join(output, 'ios', 'AppIcon-512@2x.png');
if (fs.existsSync(ios1024) && fs.statSync(ios1024).size > 0) {
  fs.copyFileSync(ios1024, path.join(assets, 'ic_launcher_1024.png'));
}
const icon256 = path.join(output, '128x128@2x.png');
if (fs.existsSync(icon256) && fs.statSync(icon256).size > 0) {
  fs.copyFileSync(icon256, path.join(assets, 'ic_launcher_256.png'));
}
console.log('Generated matching Schoology desktop and mobile icons from the shared SwiftUI vector artwork.');
