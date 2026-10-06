# @lavaui/mcp

**Model Context Protocol server for [Lava UI](https://lavahq.in)**

Lets AI assistants (Claude, Cursor, Windsurf, Zed) browse, search, and install Lava UI components directly into your codebase — no copy-pasting.

```
You: "Add the AnimatedDrawer from Lava UI to my project"

Claude (via MCP):
  → calls lava_ui.search_components("animated drawer")
  → calls lava_ui.get_component("animateddrawer")
  → calls lava_ui.install_component("animateddrawer")
     runs: bunx --bun shadcn@latest add @lavaui/animateddrawer
  → component installed, import ready ✅
```

---

## Setup

### Claude Desktop

Add to `~/.claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "lavaui": {
      "command": "npx",
      "args": ["-y", "@lavaui/mcp"]
    }
  }
}
```

Restart Claude Desktop. You'll see "lavaui" in the tools list.

### Cursor

Add to `.cursor/mcp.json` in your project root:

```json
{
  "mcpServers": {
    "lavaui": {
      "command": "npx",
      "args": ["-y", "@lavaui/mcp"]
    }
  }
}
```

### Windsurf

Add to `~/.codeium/windsurf/mcp_config.json`:

```json
{
  "mcpServers": {
    "lavaui": {
      "command": "npx",
      "args": ["-y", "@lavaui/mcp"]
    }
  }
}
```

---

## Tools

| Tool | Description |
|---|---|
| `list_components` | List all components, optionally filtered by category |
| `search_components` | Fuzzy search by keyword — returns ranked matches |
| `get_component` | Full metadata + install instructions for a component |
| `list_categories` | All categories with component counts |
| `install_component` | Runs `npx shadcn@latest add` to install into your project |

---

## Example prompts

- *"Show me all Lava UI animation components"*
- *"Find a date picker in Lava UI"*
- *"Install the kanban board component from Lava UI"*
- *"What categories does Lava UI have?"*
- *"Get details for the event-calendar component"*

---

## Requirements

- Node.js 18+
- A project using Next.js + Tailwind CSS + shadcn/ui (for `install_component`)

---

## Links

- **Website**: https://lavahq.in
- **Docs**: https://lavahq.in/docs
- **GitHub**: https://github.com/arihantcodes/lavaui

---

MIT License © Arihant Jain
