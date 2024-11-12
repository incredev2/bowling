# Bowling Counting APP

## Technique used:

*   Node v20.11.0
*   Yarn v1.22.22
*   **BE** Express, Jest
*   **FE** React v18, Tailwind CSS

## Run Backend

*   **cd backend**
*   **npm i** or **yarn**
*   **npm run dev** or **yarn dev**

## Backend APIs

> GET _BaseURL_ /v1/bowling/userID Get game info from userID, sends Not Found if there is no game created.  
> POST _BaseURL_ /v1/bowling/ Create new Game using user ID, sends bad request if there is already a game created with same user ID  
> PUT _BaseURL_ /v1/bowling/ Updates game status with specific roll.

## Backend Test

**yarn test**

## Run Frontend
* **cd frontend**
* **npm i** or **yarn**
* **npm run start** or **npm run dev**
