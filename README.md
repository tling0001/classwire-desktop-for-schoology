# ClassWire Desktop Port

ClassWire is a cross-platform desktop/mobile app aligned with the supplied official Schoology Android 2026.10.0 source. The active GitHub Actions workflow builds and publishes versioned Tauri releases for Windows, macOS, Linux, and Android, with an optional Ad Hoc iPhone IPA and QR installation package when the required Apple signing and provisioning configuration is available.

## Releases and builds

- Pushes to `main` start the versioned Tauri build-and-release workflow. The release tag and title are sourced from `package.json`.
- The Android artifact is an optimized release APK. Its final size is printed in the Actions log.
- iPhone QR-install assets are produced only when the required signing certificate, App Store Connect API credentials, and registered-device Ad Hoc profile are configured. Separate iOS and macOS certificate-generation jobs remain available through workflow dispatch.
- Newer pushes cancel older runs of the same workflow/ref.
- Release notes are maintained in `RELEASE_NOTES.md`. A failed Actions run is not automatically labeled as a failed release in the changelog.

## Windows unattended installation and removal

The Windows NSIS setup executable supports NSIS silent mode. Run the installer with the case-sensitive `/S` switch to install or update without showing the wizard:

```powershell
Start-Process -FilePath ".\\ClassWire_2026.10.0-port.55_x64-setup.exe" -ArgumentList "/S" -Wait
```

To uninstall without prompts, run the installed uninstaller with the same switch:

```powershell
Start-Process -FilePath "$env:LOCALAPPDATA\\Programs\\Schoology\\uninstall.exe" -ArgumentList "/S" -Wait
```

Use the actual setup artifact name/architecture produced by the release. NSIS also accepts `/D=<directory>` as the final installer argument when a custom installation directory is required. Silent mode suppresses installer/uninstaller UI; it does not bypass Windows security policy or elevation requirements.

## Implementation notes

The native host, app updater, package scripts, and GitHub release workflow use Tauri v2 (`src-tauri`) with the bridge in `src/tauri-bridge.js`. Electron runtime and preload code have been removed. Schoology aliases remain in releases for users on older installs.

Desktop native child webviews are implemented with Tauri's native webview APIs. Tauri's current mobile targets do not support the same multiple-child-webview API, so mobile flows that depend on embedded remote pages still need a mobile-compatible native navigation implementation. Native background push on iOS also requires APNs delivery and a server-side device-token workflow; five-minute polling alone is not equivalent to background push.

Schoology-specific behavior should be verified against the supplied official Schoology Android 2026.10.0 source in this project, not unofficial web descriptions.
