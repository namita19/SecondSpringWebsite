# Blog Post Style Guide

## Spacing Rules for Better Readability

### Automatic CSS Spacing (Applied via styles.css)
The following spacing is automatically applied to all blog posts with the `blog-post-page` class:

- **H2 headings**: 2.5rem top margin, 1rem bottom margin
- **H3 headings**: 2rem top margin, 0.75rem bottom margin  
- **Paragraphs**: 1.25rem bottom margin
- **Lists (ul/ol)**: 1.25rem top/bottom margin
- **List items**: 0.5rem bottom margin

### Manual Spacing Guidelines
When writing blog content, add `<br>` tags in these situations:

1. **Between major sections**: Add `<br>` before H2 headings when they follow paragraphs
2. **Between subsections**: Add `<br>` before H3 headings when they follow paragraphs
3. **After lists**: Add `<br>` after lists when followed by headings
4. **For visual separation**: Add `<br>` when content feels cramped together

### Example Structure:
```html
<p>Paragraph content...</p>
<br>
<h2>Major Section Heading</h2>
<p>More content...</p>
<br>
<h3>Subsection Heading</h3>
<p>Subsection content...</p>
<ul>
  <li>List item</li>
  <li>Another item</li>
</ul>
<br>
<h3>Next Subsection</h3>
```

### Color Guidelines
- **H1 (Post Title)**: Blue
- **H2/H3 (Section Headings)**: Blue  
- **Body Text**: Charcoal
- **Links**: Blue (darker on hover)
- **Backgrounds**: White for content areas

### Template Structure
All blog posts should use:
- `blog-post-page` class on body
- Two-line centered topic chips in sidebar
- Active topic chip highlighting based on post category
- Related articles section with working links
