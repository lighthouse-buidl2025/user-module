# 📘 User Module API Documentation

**Base URL:** `http://localhost:8081/api/user`

---

## ✅ 1. [POST] `/signup` – **Register User via Wallet Address**

### 📌 Description  
Registers a new user if the wallet address does not already exist in the database.

### 🔹 Request

- **Method**: `POST`
- **Headers**:  
  `Content-Type: application/json`
- **Body**:

```json
{
  "address": "0xabc1234567890..."
}
```

### ✅ Success Response: `201 Created`

```json
{
  "success": true,
  "message": "User created",
  "data": {
    "_id": "...",
    "address": "0xabc1234567890...",
    "email": "",
    "telegram": "",
    "createdAt": "2024-04-12T...",
    "__v": 0
  }
}
```

### ❌ Failure Responses

- When the user already exists:
```json
{
  "success": false,
  "message": "User already exists"
}
```

- When the address is missing:
```json
{
  "success": false,
  "message": "Address is required"
}
```

---

## ✅ 2. [GET] `/:address` – **Get User Info**

### 📌 Description  
Fetches user information registered under the given wallet address.

### 🔹 Request

- **Method**: `GET`
- **Example URL**: `/api/user/0xabc1234567890...`

### ✅ Success Response: `200 OK`

```json
{
  "success": true,
  "data": {
    "_id": "...",
    "address": "0xabc1234567890...",
    "email": "daniel@example.com",
    "telegram": "@daniel_eth",
    "createdAt": "2024-04-12T...",
    "__v": 0
  }
}
```

### ❌ Failure Response

```json
{
  "success": false,
  "message": "User not found"
}
```

---

## ✅ 3. [POST] `/email/:address` – **Register/Update Email**

### 📌 Description  
Registers or updates an email address for the given wallet address.

### 🔹 Request

- **Method**: `POST`
- **Headers**:  
  `Content-Type: application/json`
- **Body**:

```json
{
  "email": "daniel@example.com"
}
```

- **Example URL**: `/api/user/email/0xabc1234567890...`

### ✅ Success Response: `200 OK`

```json
{
  "success": true,
  "message": "Email set successfully",
  "data": {
    "_id": "...",
    "address": "0xabc1234567890...",
    "email": "daniel@example.com",
    "telegram": "",
    "createdAt": "2024-04-12T...",
    "__v": 0
  }
}
```

---

## ✅ 4. [POST] `/telegram/:address` – **Register/Update Telegram**

### 📌 Description  
Registers or updates a Telegram ID for the given wallet address.

### 🔹 Request

- **Method**: `POST`
- **Headers**:  
  `Content-Type: application/json`
- **Body**:

```json
{
  "telegram": "@daniel_eth"
}
```

- **Example URL**: `/api/user/telegram/0xabc1234567890...`

### ✅ Success Response: `200 OK`

```json
{
  "success": true,
  "message": "Telegram set successfully",
  "data": {
    "_id": "...",
    "address": "0xabc1234567890...",
    "email": "",
    "telegram": "@daniel_eth",
    "createdAt": "2024-04-12T...",
    "__v": 0
  }
}
```

---

## ✅ Common Error Response

```json
{
  "success": false,
  "message": "Descriptive error message"
}
```
