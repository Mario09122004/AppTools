# AppTools

This project has been restructured due to persistent issues with dependency versions and React Native configuration.

## Technologies

### Used (or attempted)
- **React Native / Expo**
- **Gluestack UI** (Starter Template)

### Intended to Use
- **SQLite**
- **Zustand**
- **Zod**
- *Other technologies were yet to be defined due to the early stage of the project.*

## The Problem

Development was halted due to the following compilation error on Android (Metro bundler) that prevented the app from running:

```text
Android Bundling failed 25095ms node_modules/.pnpm/expo-router@6.0.23_@expo+metro-runtime@6.1.2_@types+react-dom@19.2.3_@types+react@19.2._e6612bdc9034315a5a5affe2900223b7/node_modules/expo-router/entry.js (1421 modules)
Unable to resolve "react-native-css-interop/jsx-runtime" from "app/entrepreneurship/index.tsx"
> 1 | import { Text } from "@/components/ui/text";
  2 | import { Box } from "@/components/ui/box";
  3 |
  4 | export default function Entrepreneurship() {

Import stack:
 app/entrepreneurship/index.tsx
 | import "react-native-css-interop/jsx-runtime"
 app (require.context)
```

**Error context:**
The problem occurred suddenly after installing `zustand` for global state management. After running a quick test and seeing that everything was failing, an attempt was made to *roll back* to the previous version of the code (before installing zustand, where navigation and the menu were working correctly). 

Surprisingly, the same error persisted even in the previous state. Once the internal configuration was broken (likely the Metro cache or dependency resolution with pnpm/expo), the app became unusable.

## Lessons Learned

This experience with this “mini project” led to some clear conclusions about the development ecosystem:

1. **Chaotic version management in React Native:** Unlike working with web frameworks such as Next.js (where the tool provides a fully functional and stable base environment), mobile development with React Native can be extremely unstable and chaotic. Interdependent dependencies, the router, and package versions are very fragile in the face of changes.
2. **About Gluestack UI:**
   * **Pros:** It’s a pretty decent library. It has a good number of ready-to-use components, and the overall experience was positive, mainly because its philosophy closely resembles what `shadcn/ui` offers on the web.
   * **Manual Installation Issues:** Initially, we attempted to install the library manually. According to the official documentation, running the command `npx gluestack-ui init` should have been sufficient, but in practice, this required several extra configurations and the installation of additional libraries for it to function correctly. We hope that in the future, they will update the documentation or the command itself so that these complications no longer arise.
   * **The problem with the template:** Since the goal of this project was to test and learn mobile development technologies, it was deemed more practical to use the official starter template to avoid complicating things with the initial setup. However, there is a strong belief that using this template was the root cause of the fatal compilation errors. When attempting to modify it to suit the project’s needs, the internal configuration completely broke down.

## Next Steps

Despite these setbacks, the project is still moving forward. Development of the mobile app will continue (with the same goal of testing and learning about these technologies), but **we will try again using a component library different** from Gluestack UI to build a more user-friendly and stable environment from scratch.

*Clarification: This decision does not mean that Gluestack UI is a bad tool. Simply, given the technical complications and the experience gained, it is considered that, for the moment, it does not suit my personal tastes, preferences, and needs for this project.*

---
*This document serves as a log or *post-mortem* to record the reasons for the problems encountered and the decisions made regarding the technology stack.*