## ADDED Requirements

### Requirement: Language Toggle
The application SHALL provide a toggle to switch between English and Hindi.

#### Scenario: Switching Language
- **WHEN** the user clicks the language toggle button (e.g., "EN/HI")
- **THEN** all text content updates to the selected language immediately
- **AND** the preference persists for the session

### Requirement: Multilingual Content
All user-facing text SHALL be available in both English and Hindi.

#### Scenario: Fallback
- **WHEN** a translation key is missing
- **THEN** it should fallback to English or show a placeholder, but not crash
