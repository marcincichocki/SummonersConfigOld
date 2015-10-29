## Summoner's config

League of Legends is great game, but sometimes wild shaco support appears
and you are forced to go jungle. Will you have time to swap you runes and masteries in time?
Better be prepared for everything!

This app will allow you to create set of runes and masteries and save 
it on server for later. You will be able to import your runes and 
masteries and edit them live in the app. Basicly this is it, no more 
features are anticipated, however I would like to add login in after 
app is finished.

Why? Often I see people strungling with getting good setup, especially 
in the beggining of the season, where runes and masteries changes slighty.
This app will allow people make their setup and show the world what is in their opinion the best.
Good example is Phreak's videos on runes ad masteires he make every year.

## TODO:

1. Frameworks, tools and project structure
  1. Frameworks
    * Angular2 - core logic and routing(also using TypeScript)
    * Bootstrap4 - view
  2. Tools
    * git
    * jspm
    * gulp(?)
    * bower(?)
  3. [Project structure](#project-structure)
2. Project milestones:
  1. Runes
    * Has own route /runes
    * Every rune must be placed on runepage
    * Max runepages are 20
    * Each runepage may contains up to 9 marks, 9 seals, 9 glyphs and 3 quintessences
    * App should know which runeslot is available on certain summoner level
    * Runes must have a panel which stats for selected runepage will be shown like:
      - Runepage name(available to edit)
      - Summary of stats, but not joined flat with per level
      - buttons for clearing page entirely, removing page from runepages, adding new page
  2. Masteries
    * pretty big changes on PBE, holds for now
  3. Import
    * Simple form, take Summoner name and server
    * Make request to server, which make request to Riot API
    * Server save data with the save date on disk and redirect user to new route
    * After route change, client make get request for data
  4. Login(?)
    * dunno
3. View
  * Dark theme(sick of whitey)
  * Build with Bootstrap4
  * Only new browsers(main target are players, young people that care about their browser update)
  * That means I will abuse flexbox and all new cool features
  * Dunno about mobile(hover might be a thing, how I would replace it)
4. Internationalization
  * Only English planned for development
  * However, Riot API give easy way to obtain multi language data
  * I should write my code well so it will be ease to translate(Pascal i18n videos)



## Project structure

```
root/
  public/
    assets/
      img/
      js/
        bundle.min.js
      css/
        bundle.min.css
      app/
        templates/
          app.component.html
        app.component.ts
    index.html
  server/
  ```

