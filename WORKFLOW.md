# AI Workflow Comparison

## Overview

This exercise compared two AI-assisted development workflows by implementing the same React settings form using different prompting strategies. The first implementation relied on a short, vague prompt, while the second used a detailed specification including validation requirements, accessibility expectations, styling constraints, and a verification step.

## Round One – Vague Prompt

The first prompt simply requested a React settings form. The generated component provided the basic UI but lacked several important features. Input validation was incomplete, accessibility considerations were minimal, and no testing or self-review was performed. The generated code required significant manual review before it could be considered production ready.

## Round Two – Structured Prompt

The second implementation used a structured prompt describing the required fields, validation rules, accessibility requirements, expected behavior, styling constraints, and verification steps. The resulting component was much more complete. Labels were properly associated with inputs, validation messages were displayed correctly, and the Save button remained disabled until all fields were valid. The generated code was easier to understand and required fewer corrections.

## Comparison

The structured workflow produced higher-quality code with better maintainability and accessibility. Because the prompt clearly defined expectations, the AI generated fewer incorrect assumptions. Review time was noticeably reduced since most functional requirements were already implemented.

## AI Mistake Found

During review, I noticed that the AI initially failed to disable the Save button correctly when validation errors existed. This behavior was manually corrected after testing.

## Lessons Learned

This exercise demonstrated that prompt quality directly influences implementation quality. Providing detailed specifications, accessibility requirements, verification instructions, and expected behavior significantly improves AI-generated code while reducing manual review effort.