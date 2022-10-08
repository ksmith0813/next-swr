# AEF Associate Portal UI

A webapp which enables AEF associates to view and administer various aspects of loans booked on the new Banking Platform and Thought Machine.

## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://gitlab.com/moonpibank/ui-ux/aef-associate-portal-ui.git
git branch -M main
git push -uf origin main
```

## Installation

## Usage

#### Setting up .env.local

Create an `.env.local` file based on the `.env.sample` file provided. Please reach out to a dev on the AEF team for the client_id and client_secret for authentication.

Once updated, please run `npm run build` to use the config. Any .env updates require a build before `npm run dev`.

#### Logging in using google auth

In order to start a logged in session, on your local host visit the api route below:

`http://localhost:3000/api/auth/google`

From here, click the button and it'll forward you to the Google sign-in page. At this point, you'll enter the Arvest Dev credentials. If you haven't, it'll require you to allow the app access. From there, you should be able to create a session using your Google account.

If you see your name disappear while doing dev, please make sure there's a value for `NEXTAUTH_SECRET`, any value will be sufficient on local enviornments.

## Support

Tell people where they can go to for help. It can be any combination of an issue tracker, a chat room, an email address, etc.

## Roadmap

If you have ideas for releases in the future, it is a good idea to list them in the README.

## Contributing

State if you are open to contributions and what your requirements are for accepting them.

For people who want to make changes to your project, it's helpful to have some documentation on how to get started. Perhaps there is a script that they should run or some environment variables that they need to set. Make these steps explicit. These instructions could also be useful to your future self.

You can also document commands to lint the code or run tests. These steps help to ensure high code quality and reduce the likelihood that the changes inadvertently break something. Having instructions for running tests is especially helpful if it requires external setup, such as starting a Selenium server for testing in a browser.

## Authors and acknowledgment

Show your appreciation to those who have contributed to the project.

## License

For open source projects, say how it is licensed.

## Project status

If you have run out of energy or time for your project, put a note at the top of the README saying that development has slowed down or stopped completely. Someone may choose to fork your project or volunteer to step in as a maintainer or owner, allowing your project to keep going. You can also make an explicit request for maintainers.
