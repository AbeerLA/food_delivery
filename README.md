# 🍔 food-delivery-app

A modern **React Native (Expo)** food delivery application built with **TypeScript**, featuring authentication, cart management, search, filtering, and a clean mobile UI.

This project demonstrates real-world mobile app architecture using state management, backend integration, and reusable UI components.

---

## 📱 Features

* 🔐 User Authentication (Sign In / Sign Up)
* 🏠 Home screen with featured food items
* 🔎 Search functionality
* 🧩 Category filtering
* 🛒 Add to cart & remove from cart
* ➕ Increase / decrease item quantity
* 👤 User profile screen
* 🎨 Clean UI with custom reusable components
* ⚡ Global state management

---

## 🛠 Tech Stack

* **React Native (Expo)**
* **TypeScript**
* **Expo Router**
* **NativeWind (Tailwind CSS for React Native)**
* **Zustand (State Management)**
* **Appwrite (Backend & Authentication)**

---

## 📂 Project Structure

```
app/
 ├── (auth)/          # Authentication screens
 ├── (tabs)/          # Main tab navigation screens
 ├── _layout.tsx      # Root layout
components/           # Reusable UI components
constants/            # App constants
lib/                  # Backend & utility functions
store/                # Zustand state stores
assets/               # Fonts, icons, images
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/food-delivery-app.git
cd food-delivery-app
```

### 2️⃣ Install dependencies

```bash
npm install
```

or

```bash
yarn install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the root directory and add your Appwrite configuration:

```
EXPO_PUBLIC_APPWRITE_ENDPOINT=your_endpoint
EXPO_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
EXPO_PUBLIC_APPWRITE_DATABASE_ID=your_database_id
EXPO_PUBLIC_APPWRITE_USER_COLLECTION_ID=your_user_collection_id
```

Make sure your backend is properly configured.

### 4️⃣ Start the development server

```bash
npx expo start
```

Then scan the QR code using Expo Go or run on an emulator.

---

## 🧠 State Management

The app uses **Zustand** for global state handling:

* `auth.store.ts` → Handles authentication state
* `cart.store.ts` → Manages cart items and quantities

---

## 🎨 UI & Styling

* Styled using **NativeWind (Tailwind CSS for React Native)**
* Custom reusable components:

  * `CustomButton`
  * `CustomInput`
  * `MenuCard`
  * `CartItem`
  * `SearchBar`
  * `Filter`
  * `CustomHeader`

---

## 🔥 Backend Integration

The app integrates with **Appwrite** for:

* User authentication
* Database operations
* Data fetching & seeding

Backend logic is located inside:

```
lib/appwrite.ts
lib/useAppwrite.ts
lib/data.ts
lib/seed.ts
```

---

## 📸 Screens Included

* Authentication (Sign In / Sign Up)
* Home
* Search
* Cart
* Profile

---

## 🚀 Future Improvements

* Payment gateway integration
* Order history
* Push notifications
* Admin dashboard
* Dark mode support

---

## 👩‍💻 Author

Built as a mobile food delivery application project to demonstrate modern React Native development practices.
