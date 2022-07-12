# Trello clone

~~This project is under constant progress.~~
~~The workload on the client side of this project has been reduced in favor of building a solid [server](https://github.com/abukati/Trellop-server).~~
Project development is on halt for now.

## What has been done so far

- UI is complete in most of the visible areas.
- Lists and tasks (known artifacts are [listed here](#known-artifacts)) are drag and droppable.
- Board's and lists' titles are editable.
- Ability to create new tasks and lists.
- Task badges (labels, members, cover color & style) are editable.
- Tasks are archivable and archived tasks can be either sent back to it's original position on the board or completely removed.
- Task's routable details page is almost done UI wise, functionality is delayed to be integrated with the [server](https://github.com/abukati/Trellop-server).

### Feel like running this project on your machine?

Fork it, clone it, cook it up using `npm install` and serve with `npm start`.

## Some of the many things that are left to do

- Tests, tests and tests.
- Ability to create new boards, from scratch or using a template.
- Editable board appearance and view mode (calendar and dashboard for now).
- Board's sidemenu with tabs for archive, background, labels, description and activity.
- Editable dates on tasks.
- User actions (star/unstar board, watch/unwatch, comment, authorization).

### Some of the things I want to do

- Eject the pre-configured webpack provided by CRA and config one myself.
- Toggler for dimming/brightening, like dark/light mode but not quite the same.
- Rendering "skeltons" for board's page while data is fetched, also server side rendering some static pages.

## Known artifacts

- Task's styling messes up when it's dragged to another list (happens only if dragged to the right 🤔)
- On task's details page clicking outside any badge modal, yet inside the boundaries of page itself, the modal should close.
- Watch, star, member invites, board views mode, and header links do nothing for now.
- Labels' animations are being reset on some renders causing this weird bounce.
- Sidemenu is currently displaying only archived tasks (if present) in a very non-stylish manner.
- Responsivness of modals needs a little tweaking as it's completely off in some cases.

## Testing

There are no tests written yet (🤡). They will be written using Jest.

### Typing

TypeScript, TypeScript and TypeScript.

### Linting

ESlint

### Formatting

Prettier, [root config file](./.prettierrc) for this project.

### UI libraries

- React.
- Styled components (🫶🏻)
- React-beautiful-dnd.
