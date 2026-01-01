# How to Update Your Website

Now that your site is connected to GitHub and Vercel, updating it is super easy!

## Adding New Photos
1.  **Add Photos**: Put your new photos in the `public/images/` folder.
2.  **Update Code**: Open `src/main.js` and add them to the `memories` list.
3.  **Publish**:
    Run these commands in your terminal to send the changes to the live site:
    ```bash
    git add .
    git commit -m "Added new photos"
    git push
    ```
    
    **That's it!** Vercel will see the new code and automatically update the website within a minute.

## Troubleshooting
- If images don't load, make sure the filename in `main.js` matches exactly (case-sensitive!).
- If the deployment fails, check your Vercel dashboard for errors.


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
