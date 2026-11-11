# ClassWire Privacy Policy

**Effective date:** November 9, 2026  
**Last updated:** November 9, 2026

This policy describes how the ClassWire desktop application (the “App”) handles information. ClassWire is an independent client for Schoology and is not operated by Schoology, Google, GitHub, OpenAI, Anthropic, or Ollama.

## 1. Information the App handles

### Schoology account and learning data
When you sign in, the App receives and uses the Schoology OAuth credentials needed to access the Schoology account you authorize. The App stores the Schoology OAuth token and token secret in an app-specific local data file on your device. It also uses profile and Schoology content returned by the Schoology services you access, such as courses, groups, assignments, grades, materials, events, messages, comments, and attachments.

The App sends requests directly to Schoology using your authorized session. Schoology handles those requests under its own privacy policy, terms, and the rules of your school or organization.

### AI provider credentials and Google authorization
API keys for supported AI providers are stored through your operating system's credential facility (Windows Credential Manager, macOS Keychain, or Linux Secret Service where available). They are not intentionally written to ClassWire chat history or ordinary WebView local storage.

If you choose Google sign-in and automatic Gemini key creation, ClassWire uses an OAuth authorization-code flow with PKCE. A Google refresh token is stored in your operating system's credential facility. The App requests the Google Cloud Platform OAuth scope so it can list projects visible to your account and, only after you select a project, enable the required APIs, create or reuse a dedicated service account, create or reuse an API key restricted to the Gemini API, and retrieve that key for local storage. This is a broad Cloud Platform scope; the App uses the token for project discovery and the described Gemini key setup operations. The App does not create or store a service-account private-key file. You can instead provide an existing Gemini key manually.

The Cloud access token is used by the App for these setup operations. Google controls the OAuth authorization, Cloud project permissions, API availability, billing, and its own handling of information.

### AI prompts, conversation history, and Schoology context
If you use ClassWire AI, the App sends your prompt, the relevant recent conversation messages, AI instructions, and information needed to answer your question to the AI provider you selected. Depending on your request and the Schoology page you are viewing, that information can include Schoology page text and data retrieved through Schoology API tools, including course, assignment, grade, event, material, and message information. When the AI requests Schoology data, the returned results may also be sent to the selected AI provider so it can formulate an answer.

The App stores AI preferences, the recent conversation history (up to 30 conversations), and the last captured page context in local WebView storage on your device. This history is not synchronized to a ClassWire-operated account service. The provider you select receives the information necessary to process each AI request and handles it under that provider's own terms, privacy policy, retention settings, and data-use practices.

Supported providers include Google Gemini, OpenAI, Anthropic, and Ollama. If you choose Ollama, requests are sent to the local Ollama service at 127.0.0.1:11434 on your device. ClassWire does not send Ollama requests to a hosted Ollama service.

### Device and app information
The App stores settings, notification state, and other operational data in app-specific local storage. Files you download are saved to the location selected or used by your operating system.

The App checks GitHub for release information and downloads update packages from GitHub. GitHub may receive ordinary connection information such as your IP address, request headers, and the requested release or asset. If you contact the maintainers through GitHub Issues, information you submit there is handled by GitHub and may be publicly visible.

ClassWire does not operate a user account backend or a server that receives AI conversation history. Third-party services may independently log requests made to them.

## 2. How information is shared

ClassWire does not sell personal information. Information is shared directly with the relevant service when needed for the feature you use:

- **Schoology:** authentication and Schoology pages, API requests, content, and actions you initiate.
- **Your selected AI provider:** prompts, relevant conversation history, and Schoology context used to answer your request.
- **Google:** OAuth sign-in and, if selected, Google Cloud project discovery and Gemini key provisioning.
- **GitHub:** release checks, update downloads, and support requests you submit through Issues.

ClassWire does not send your AI conversations to every provider; requests go to the provider currently selected in AI settings. Do not send information to an AI provider unless you are comfortable with that provider processing it.

## 3. Actions and educational records

ClassWire AI can retrieve Schoology information and can prepare supported changes such as text assignment submissions, messages, course or group updates, and grade changes. The App requires your separate confirmation before executing supported write actions. You are responsible for reviewing the target, content, recipients, and consequences before confirming. AI-generated content can be inaccurate or incomplete.

Only use the App with accounts, records, and permissions you are authorized to access. Follow your school or organization's privacy, acceptable-use, and student-record policies. Avoid sending sensitive student information to an AI provider unless you have the required authorization.

## 4. Local storage, retention, and deletion

- Schoology sign-in credentials are stored in the App's local app-data directory. Signing out removes the App's local Schoology authentication file.
- AI provider API keys and the Google OAuth refresh token are stored in the operating system's credential facility. Signing out of Schoology clears local AI preferences, conversation history, captured page context, provider API keys, and the Google refresh token; it also attempts to sign out of Puter and closes its authentication window.
- AI preferences, recent conversations, and captured page context are stored in local WebView storage until that local app data is cleared or replaced.
- Downloaded files remain wherever your operating system or you saved them.
- Google Cloud API keys and service accounts created in your project remain resources in that project until you delete them in Google Cloud.

You control your device storage and credentials. You can revoke ClassWire's Google access through your Google Account security settings, remove the generated key or service account in Google Cloud, and use the controls provided by each AI provider to manage provider-side data. The maintainers cannot remotely inspect or erase data stored on your device or in your third-party accounts.

## 5. Security

The App uses operating-system credential storage for AI provider keys and the Google OAuth refresh token. Schoology session credentials are stored in the App's local app-data file. Protect your device account, keep your operating system updated, and do not share your app-data folder or credential-store access. No local or network security measure can guarantee absolute security.

## 6. Children's and school-managed accounts

ClassWire may be used in educational settings. The App is not a school, a student-information-system provider, or a substitute for a school's required privacy review. If you use a school-managed account or access education records, follow the instructions and permissions of your school, district, parent, or legal guardian as applicable. Do not use third-party AI services with education records unless you are authorized to do so.

## 7. Third-party services

Schoology, Google, GitHub, OpenAI, Anthropic, and Ollama are independent services. Their privacy policies, terms, retention practices, and security controls apply to information they process. ClassWire does not control those services.

## 8. Changes to this policy

This policy may be updated when the App's functionality or data handling changes. The latest version will be published in this repository. The effective date above identifies the version currently described.

## 9. Contact

For privacy questions or requests, contact the ClassWire project maintainers through the repository's [GitHub Issues page](https://github.com/tling0001/classwire-desktop-for-schoology/issues). Do not post passwords, API keys, OAuth tokens, student records, or other sensitive information in a public issue.
