# SPIKE-X User Flow Diagram (UFD)

> **User Flow Diagram (UFD)**: A visual representation showing the path users take through the system, including decision points, navigation flows, and interactions between different system components/layouts.

```
                    [START]
                       |
                       v
    ┌─────────────────────────────────────┐
    │        LANDING PAGE LAYOUT          │
    │         (spikex.com)               │
    │                                    │
    │  • Home, Features, About           │
    │  • Marketing Content               │
    │  • Public Information              │
    └─────────────────┬───────────────────┘
                      |
                      v
             {User Authenticated?}
                    /     \
                  No       Yes
                  /         \
                 v           v
          [Login/Signup]     |
                 |           |
                 v           |
    ┌─────────────────────────────────────┐
    │          AUTH LAYOUT                │
    │   (console.spikex.com/login or     │
    │    console.spikex.com/signup)      │
    │                                    │
    │  • Clean Authentication Interface  │
    │  • Logo + Form + Footer Only       │
    │  • No Sidebar or App Chrome        │
    └─────────────────┬───────────────────┘
                      |
                      v
         [Authentication]
                 |
                 v
                 └───────────┘
                             |
                             v
    ┌─────────────────────────────────────┐
    │         CONSOLE LAYOUT              │
    │      (console.spikex.com)          │
    │                                    │
    │  • Dashboard (Landing After Login)  │
    │  • Models Management               │
    │  • Datasets Management             │
    │  • Library Browsing                │
    │  • Settings & Profile              │
    └─────────────┬───────────────────────┘
                  |
                  v
         {User Action Choice}
                 / | \
                /  |  \
               /   |   \
              /    |    \
             /     |     \
            v      v      v
    [Manage     [Browse   [Configure
    Datasets]   Library]  Settings]
            \      |      /
             \     |     /
              \    |    /
               \   |   /
                \  |  /
                 \ | /
                  \|/
                   v
         {Create/Open Model?}
                /       \
              No         Yes
              |           |
              v           v
        [Stay in      [Create New Model]
         Console]           |
              |             v
              |      [Enter Model Name]
              |             |
              |             v
              |       [Save to DB]
              |             |
              |             v
              |       [Open in New Tab]
              |             |
              |             v
              |   ┌─────────────────────────────────────┐
              |   │          LAB LAYOUT                 │
              |   │       (lab.spikex.com)             │
              |   │                                    │
              |   │  • Architecture Design             │
              |   │  • Training Configuration          │
              |   │  • Real-time Visualization         │
              |   │  • Model Evaluation                │
              |   │  • Export/Save Operations          │
              |   └─────────────┬───────────────────────┘
              |                 |
              |                 v
              |        {User Lab Action}
              |              /  |  \
              |             /   |   \
              |            /    |    \
              |           v     v     v
              |     [Design   [Train  [Export
              |     Architecture] Model] Model]
              |           |     |     |
              |           v     v     v
              |      [Configure [Monitor [Download
              |       Layers]  Progress] to Local]
              |           |     |     |
              |           \     |     /
              |            \    |    /
              |             \   |   /
              |              \  |  /
              |               \ | /
              |                \|/
              |                 v
              |         [Continue Working]
              |                 |
              |                 v
              |        {Save Model Changes?}
              |               /        \
              |             Yes         No
              |             /            \
              |            v              v
              |     [Auto-save to DB]   [Lose Changes]
              |            |              |
              |            v              |
              |     [Update Console]      |
              |            |              |
              |            v              |
              └────────────┼──────────────┘
                           |
                           v
                    [Continue/End Session]
                           |
                           v
                       [END]
```

## Key Symbols Used

- `[Process]` - Rectangular boxes for actions/pages
- `{Decision}` - Diamond shapes for decision points
- `-->` - Flow arrows indicating direction
- `||` - Parallel process (new tab opening)
- Multiple paths showing user choices

## User Journey Critical Points

1. **Entry Point**: Landing page for all users
2. **Authentication Gate**: Login required for main platform
3. **Central Hub**: Console as management dashboard
4. **New Tab Launch**: Lab opens separately for model work
5. **Auto-sync**: Changes in Lab reflect back to Console
6. **Persistent State**: All work saved to database

## Layout Transitions

- **Landing → Auth**: Via login/signup buttons (independent AuthLayout)
- **Auth → Console**: Via successful authentication
- **Console → Lab**: Via model creation/opening (new tab)
- **Lab ↔ Console**: Data synchronization (not navigation)
- **Auth ↔ Auth**: Cross-navigation between login and signup forms

## **Critical Design Decisions Shown:**

1. **Landing Page** - Public entry point with marketing focus
2. **Auth Layout** - Clean, independent authentication interface (no console sidebar)
3. **Console as Hub** - Central management dashboard after login
4. **Lab in New Tab** - Dedicated workspace that doesn't disrupt console navigation
5. **Data Synchronization** - Changes in Lab automatically reflect in Console
6. **Component Reusability** - Logo and Footer shared across layouts for consistency

## **User Experience Flow:**
- **Discover** → **Authenticate** → **Manage** → **Create/Work** → **Save/Export**

The diagram shows how each of the four layouts serves its specific purpose while maintaining smooth transitions and data consistency across the platform:

- **Landing Layout**: Marketing and discovery
- **Auth Layout**: Clean authentication experience  
- **Console Layout**: Management hub with sidebar navigation
- **Lab Layout**: Dedicated model workspace

All layouts share reusable components (Logo, Footer) for visual consistency while maintaining independent architectures.
