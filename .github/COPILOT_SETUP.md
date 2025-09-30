# GitHub Copilot Configuration Setup

> NOTE: `.github/copilot-instructions.md` is the canonical location for Copilot agent guidance in this repository. Keep that file short and actionable; use `.copilot/` for environment configuration only (e.g., `dev-environment.yml`).

This repository has been configured with comprehensive GitHub Copilot instructions to provide the best possible AI-assisted development experience.

## Configuration Files

### 📚 Repository Instructions
- **File**: `.github/INSTRUCTIONS.md`
- **Purpose**: Provides comprehensive repository-specific instructions for GitHub Copilot
- **Content**: Project overview, tech stack, development setup, coding standards, and common patterns

### 🤖 Custom Copilot Instructions
- **File**: `.copilot/instructions.md`
- **Purpose**: Custom instructions specifically for GitHub Copilot interactions
- **Content**: Development principles, technology preferences, quality standards, and project-specific guidance

### 🛠️ Development Environment
- **File**: `.copilot/dev-environment.yml`
- **Purpose**: Customizes the development environment for GitHub Copilot coding agent
- **Content**: Pre-install configurations, development tools, browser support, and environment variables

### 🔧 MCP Configuration
- **File**: `.github/copilot-mcp.json`
- **Purpose**: Model Context Protocol configuration for extended capabilities
- **Content**: MCP servers, tools, context information, and workflow definitions

### ⚡ Validation Workflow
- **File**: `.github/workflows/copilot-validation.yml`
- **Purpose**: Validates that the repository remains compatible with Copilot configurations
- **Content**: CI/CD pipeline that checks linting, building, and configuration file presence

## Features Configured

### ✅ Repository-Level Instructions
- Comprehensive project documentation accessible to Copilot
- Tech stack details (Next.js 15, TypeScript, Tailwind CSS, Radix UI)
- Development workflow and best practices
- File organization and naming conventions

### ✅ Custom Development Environment
- Pre-configured Node.js and npm environment
- Essential development tools and VS Code extensions
- Browser support for UI testing
- Performance optimizations (Turbopack, incremental compilation)

### ✅ Enhanced Capabilities
- MCP integration for browser automation (Playwright)
- Filesystem access for source code analysis
- UI testing and visual regression detection
- Performance monitoring and bundle analysis

### ✅ Quality Assurance
- Automated validation of configuration files
- Build and lint checks in CI/CD
- TypeScript type checking
- Multi-Node.js version testing

## How It Works

1. **Repository Instructions** provide Copilot with context about the project structure, coding standards, and best practices
2. **Custom Instructions** guide Copilot's behavior when generating code suggestions and responses
3. **Development Environment** ensures Copilot has access to necessary tools and configurations
4. **MCP Configuration** extends Copilot's capabilities with additional tools and context
5. **Validation Workflow** ensures the setup remains functional over time

## Benefits

- **Better Code Suggestions**: Copilot understands project-specific patterns and conventions
- **Consistent Code Quality**: Instructions enforce TypeScript, accessibility, and performance standards
- **Faster Development**: Pre-configured environment reduces setup time
- **Enhanced Testing**: Integrated browser automation and UI testing capabilities
- **Continuous Validation**: Automated checks ensure configuration remains valid

## Usage

Once configured, GitHub Copilot will automatically:
- Follow the established code patterns and conventions
- Use the correct file and folder structure
- Apply proper TypeScript typing
- Consider accessibility and performance best practices
- Suggest code that aligns with the project's tech stack

## Maintenance

The configuration is validated automatically through GitHub Actions. If you need to update the configuration:

1. Modify the relevant configuration files
2. Run `npm run lint` and `npm run build` to ensure compatibility
3. The validation workflow will check the changes on push/PR

## References

This setup follows GitHub's best practices:
- [Best practices for Copilot coding agent](https://gh.io/copilot-coding-agent-tips)
- [Adding repository custom instructions](https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions)
- [Extending with Model Context Protocol](https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/use-copilot-agents/coding-agent/extend-coding-agent-with-mcp)
- [Customizing the development environment](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/customize-the-agent-environment)