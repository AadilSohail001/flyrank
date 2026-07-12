# Project Instructions

## Stack

- React
- Vite
- JavaScript
- HTML
- CSS

## Coding Standards

- Use functional React components.
- Use React Hooks for state management.
- Maintain a clean and organized folder structure.
- Follow ESLint recommendations.
- Use semantic HTML elements.
- Build reusable and modular components.
- Keep components focused on a single responsibility.

## Git Convention

Use Conventional Commits:

- feat
- fix
- docs
- style
- refactor
- chore
- test

## AI Usage

Use AI for:

- Debugging
- Refactoring
- Documentation
- Code explanations
- Boilerplate generation
- Test generation

Always review AI-generated code before committing.

---

# AI Workflow Rules

## Rule 1 – Write Detailed Prompts

Provide complete requirements before asking AI to generate code, including:

- Feature description
- File names or locations
- Constraints
- Expected behavior
- Acceptance criteria

## Rule 2 – Validation Is Required

Every form must include appropriate client-side validation.

Examples:

- Required fields
- Email format validation
- Password length validation
- Clear validation messages

## Rule 3 – Accessibility First

All forms should follow accessibility best practices.

Requirements:

- Labels connected using `htmlFor`
- Keyboard-friendly interactions
- `aria-invalid` for invalid fields
- Readable error messages

## Rule 4 – Verify AI Output

After AI generates code:

- Review the implementation.
- Check edge cases.
- Look for logical mistakes.
- Refactor if necessary.
- Never assume the generated solution is correct.

## Rule 5 – Testing

Whenever practical:

- Generate tests for new components.
- Verify validation logic.
- Test common user interactions.
- Test edge cases before merging.

## Rule 6 – Clean Components

Keep components small and focused.

Avoid combining unrelated functionality into a single component.

## Rule 7 – Commit Quality

Every meaningful change should have its own Conventional Commit with a clear and descriptive message.

## Lessons Learned

This project demonstrated that structured prompts produce higher-quality code than vague prompts. Explicit requirements for validation, accessibility, testing, and verification significantly reduce review effort and improve the reliability of AI-generated code.