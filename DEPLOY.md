# How to Deploy (The Best Way)

The best way to host on Vercel is to connect it to your **GitHub** repository. This way, every time you update your code (like adding new photos), the site updates automatically!

## Step 1: Push to GitHub

1.  **Initialize Git** (if you haven't yet):
    - Open terminal in project folder.
    - Run:
      ```bash
      git init
      git add .
      git commit -m "Initial commit"
      ```

2.  **Create a Repository**:
    - Go to [GitHub.com/new](https://github.com/new).
    - Name it `our-memories` (or whatever you like).
    - **Important**: Don't check "Add a README" or ".gitignore".

3.  **Push Code**:
    - Copy the commands GitHub gives you (under "…or push an existing repository from the command line"). They look like this:
      ```bash
      git remote add origin https://github.com/YOUR_USERNAME/our-memories.git
      git branch -M main
      git push -u origin main
      ```

## Step 2: Connect Vercel

1.  Go to [Vercel.com](https://vercel.com) and log in.
2.  Click **"Add New..."** -> **"Project"**.
3.  You should see your `our-memories` repo in the list. Click **"Import"**.
4.  Click **"Deploy"**.
5.  Done! Vercel will give you a link (e.g., `https://our-memories.vercel.app`).


5.  **Done!**
    - Send the "Production" link to your special someone!

## How to Customize Photos
1.  Put your cute photos in the `public/` folder (or create an `assets` folder).
2.  Open `src/main.js`.
3.  Update the `memories` array with the filenames of your photos.
    ```javascript
    const memories = [
      { url: '/my-photo-1.jpg', caption: "Us at the beach" },
      // ...
    ];
    ```
