# CONTRIBUTING

## Introduction

Hello and thank you for your interest in contributing to Database Viewer.

Contributions are welcome and there are many ways you can get involved!

To get started, choose your area of interest:

<table>
  <tr>
    <td  align="center">
        <a href="#-issues--discussions">👥 Issues & Discussions</a> |
        <a href="#-documentation">📚 Documentation</a> |
        <a href="#-spread-the-word">📣 Spread the word</a> |
        <a href="#-code-contribution">💻 Code Contribution</a>
    </td>
  </tr>
</table>

<br/>

---

### 👥 Issues & Discussions

You can interact with users by sharing information and asking/answering questions in our [Discussions](https://github.com/next-build/database-viewer/discussions) tab.

Also, you can contribute by reporting bugs, patching problems or providing technical support in our [Issues](https://github.com/next-build/database-viewer/issues) tab.

<br/>

---

### 📚 Documentation

Documentation is key for any project success!

Currently, our documentation is stored at the [README](https://github.com/next-build/database-viewer/blob/development/README.md) file of this repository.

You may contribute by improving existing information, covering missing topics, or fixing typos and grammar errors.

The documentation official language is in English.

<br/>

---

### 📣 Spread the word

If you enjoy Database Viewer, please consider talking about our project in your community.

Share this [repository link](https://github.com/next-build/database-viewer) on Twitter, YouTube, Discord or any other social network you are part of.

You are also welcome to write articles, reviews and tutorials about this project on your blog or programming website.

Ah! Don't forget to let the author know about your work. Say hello to [@SaptarshiDy](https://github.com/SaptarshiDy).

<br/>

---

### 💻 Code Contribution

Please follow the steps below to contribute with code.

## Steps

### 📌 Step 1

Fork this repository and enter its directory.

Replace the placeholder `<YOUR-USERNAME>` with your GitHub username and run the command:

```shell
git clone https://github.com/<YOUR-USERNAME>/database-viewer.git && cd database-viewer
```

### 📌 Step 2

Install all PHP dependencies using Composer, run the command:

```shell
composer install
```

Once finished, proceed to install Node dependencies. Run the command:

```shell
npm install
```

### 📌 Step 3

Create a new branch for your code. You may call it `feature-` / `fix-` / `enhancement-` followed by the name of what you are developing.

For example:

```shell
git checkout -b feature/feature-new_about_page
```

Now, you can work on this newly created branch.

### 📌 Step 4

If you're working on the front-end of Database Viewer, you want to run the command `npm run watch` to automatically rebuild any CSS and JavaScript files.

Keep in mind that any front-end changes will need to be re-published to your Laravel application:

```shell
php artisan database-viewer:publish
```

The command also takes an additional parameter, `--watch` which continuously watches for new front-end changes and re-publishes them.

```shell
php artisan database-viewer:publish --watch
```

<!-- ### 📌 Step 5

After you are done coding, please run Laravel Pint for code formatting:

```Shell
composer format
```

Finally, run the Pest PHP for tests:

```Shell
composer test
``` -->

### 📌 Step 5

You may want to install your modified version of Database Viewer inside a Laravel application, and test if it performs as expected.

In your Laravel application, modify the `composer.json` adding a `repositories` key with the `path` of Database-Viewer on your machine.

This will instruct composer to install Database Viewer from your local folder instead of using the version on the official repository.

Example:

```json
// File: composer.json

{
  "scripts": { ... },

  "repositories": [
    {
      "type": "path",
      "url": "/home/myuser/projects/database-viewer"

    }
  ]
}
```

Proceed with `composer require next-build/database-viewer`.

### 📌 Step 7

If you changed any CSS or JavaScript files, you must build the assets for production before committing.

Run the command:

```shell
npm run production
```

### 📌 Step 8

Commit your changes. Please send short and descriptive commits.

For example:

```Shell
git commit -m "adds route for about page"
```

### 📌 Step 9

If all tests are ✅ passing, you may push your code and submit a Pull Request.

Please write a summary of your contribution, detailing what you are changing/fixing/proposing.

When necessary, please provide usage examples, code snippets and screenshots. You may also include links related to Issues or other Pull Requests.

Once submitted, your Pull Request will be marked for review and people will send questions, comments and eventually request changes.

---

🙏 Thank you for your contribution!