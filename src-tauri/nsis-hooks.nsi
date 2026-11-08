!macro NSIS_HOOK_PREINSTALL
  ; Keep the existing per-user install directory so upgrades reuse installed data.
  StrCpy $INSTDIR "$LOCALAPPDATA\Programs\Schoology"
!macroend
