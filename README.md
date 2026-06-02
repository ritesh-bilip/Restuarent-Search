# KHOJO – Restaurant Search & Food Ordering (Front-End)

This project is a simple front-end web app for browsing restaurant options, adding food items to a cart, and viewing a final bill.

> **Note:** There is no backend in this repository. Data is stored in the browser using **`localStorage`**.

---

## How to Run

1. Open **`main.html`** in a browser.
2. Use the UI flow:
   - Landing page (`main.html`) → restaurant cards
   - Menu page (`foodshowcase.html`) → add items to cart
   - Cart → proceed to bill (`ordersbill.html`)
   - Helpline form (`helpdesk.html`) (UI only)

Because it’s all static HTML/CSS/JS, you can run it by double-clicking `main.html`.

---

## File / Folder Overview

### Root Files

#### `main.html`

Landing page.

- Header navigation:
  - **Home** (`Home` link)
  - **Orders** → `foodshowcase.html`
  - **Help** → `helpdesk.html`
- Hero section with the title **“Order food online with KHOJO”**
- Empty container: `.restaurant-list` where restaurant cards are injected by `main.js`.
- Loads stylesheet: `main.css`
- Loads script: `main.js`

#### `main.js`

Generates restaurant cards dynamically.

- Defines `restaurantsData` (a list of restaurant objects with `name`, `image`, `link`).
- `createRestaurantCards(restaurants)`:
  - Finds `.restaurant-list`
  - Creates a card for each restaurant with:
    - image (from `imge/`)
    - restaurant name
    - “View Menu” link to `foodshowcase.html`
- Also binds a click on `#orderNow` to show an alert (placeholder behavior).

#### `main.css`

Global styling used by `main.html`.

- Resets margins/padding.
- Styles header/navigation.
- Styles hero section using `imge/fotor-ai-2024101002526.jpg`.
- Styles restaurant card grid and hover effects.
- Styles footer as a fixed bottom bar.

#### `foodshowcase.html`

Food menu page + cart UI.

- Contains multiple “food item cards”. Each card has:
  - an image (`food-imge/...`)
  - `.card-content` with:
    - `data-name` (item name)
    - `data-price` (item price)
  - a button: `onclick="addItem(this)"`
- Cart section:
  - `<ul id="cart-items"></ul>`
  - `<p id="total">Total: $0.00</p>`
  - Button: `onclick="proceedToBill()"`
- Loads `cartbill.js`.

#### `cartbill.js`

Implements cart + checkout transition for menu items.

- `addItem(button)`:
  - Reads `data-name` and `data-price` from the clicked card’s `.card-content`.
  - Pushes `{ name, price }` into `cart` array.
  - Increments `totalAmount`.
  - Calls `updateCart()`.
- `updateCart()`:
  - Renders items into `#cart-items`.
  - Updates total in `#total`.
- `proceedToBill()`:
  - Stores cart in `localStorage`:
    - `localStorage.setItem('cart', JSON.stringify(cart))`
    - `localStorage.setItem('total', total)`
  - Redirects to `ordersbill.html`.

> **Important:** The code stores `total` but the variable used in the bill flow should match the cart total value. If you later see bill totals not matching, this is a likely area to adjust.

#### `ordersbill.html`

Final bill display page.

- Shows:
  - `<ul id="bill-items"></ul>`
  - Subtotal / GST / Total elements:
    - `#subtotal`
    - `#gst`
    - `#total-bill`
- Loads `ordersbill.js`.
- Includes a “Go Back” button using `goBack()`.

#### `ordersbill.js`

Renders bill details from `localStorage`.

- On page load (`window.onload`):
  - Reads `cart` from `localStorage`.
  - Reads `total` from `localStorage` as `subtotal`.
  - Calculates:
    - GST = `subtotal * 0.1`
    - Total = `subtotal + gstAmount`
  - Populates:
    - each item into `#bill-items`
    - `#subtotal`, `#gst`, `#total-bill`
- `goBack()` uses `window.history.back()`.
- Includes a `try/catch` block to verify that the loaded cart is an array.

#### `helpdesk.html`

Helpline form UI.

- Simple HTML form with fields:
  - `name`, `email`, `phone`, `message`
- Submits to `/submit_form` with `method="POST"`.

> **Note:** Since there’s no server code included, submitting will not process anywhere unless you connect it to a backend.

---

### Image Folders

#### `imge/`

Images used by `main.html/main.css` and restaurant cards.
Examples referenced in code:

- `imge/fotor-ai-2024101002526.jpg` (hero background)
- Multiple restaurant images like `imge/the irish house.jpeg`, `imge/bombay brasserie.jpeg`, etc.

#### `food-imge/`

Food item images used by `foodshowcase.html`.
Examples referenced in code:

- `food-imge/burgger.jpg`
- `food-imge/capachino-coffe.jpg`
- `food-imge/casey.jpg`
- `food-imge/chowmin.jpg`
- `food-imge/coctal.jpg`
- `food-imge/coffe.jpg`
- `food-imge/coldcoffe.jpg`
- `food-imge/desert-1.jpg`, `food-imge/desert.jpg`, `food-imge/deserts-2.jpg`
- `food-imge/fries.jpg`

---

## Data Flow Summary

1. Menu page (`foodshowcase.html` + `cartbill.js`):
   - User clicks **Add to Cart** → items appended to in-memory `cart` + total.
2. Checkout (`proceedToBill`) saves:
   - `cart` and a total value into **`localStorage`**.
3. Bill page (`ordersbill.html` + `ordersbill.js`):
   - Reads `cart` and total from `localStorage`.
   - Calculates GST and renders the final bill.

---

## Project Limitations (Current State)

- No backend logic for helpline form submission.
- Bills rely entirely on `localStorage` values.
- Menu content and restaurant list are hardcoded in the JS/HTML.
