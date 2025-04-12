# 📘 User Module API 문서

Base URL: `http://localhost:8081/api/user`

---

## ✅ 1. [POST] `/signup` – **지갑 주소 기반 회원가입**

### 📌 설명  
지갑 주소가 DB에 없으면 새 유저를 등록합니다.

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

### ✅ 성공 응답: `201 Created`

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

### ❌ 실패 응답

- 이미 존재할 경우:
```json
{
  "success": false,
  "message": "User already exists"
}
```

- 주소 누락:
```json
{
  "success": false,
  "message": "Address is required"
}
```

---

## ✅ 2. [GET] `/:address` – **유저 조회**

### 📌 설명  
지갑 주소로 등록된 유저 정보를 조회합니다.

### 🔹 Request

- **Method**: `GET`
- **URL 예시**: `/api/user/0xabc1234567890...`

### ✅ 성공 응답: `200 OK`

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

### ❌ 실패 응답

```json
{
  "success": false,
  "message": "User not found"
}
```

---

## ✅ 3. [POST] `/email/:address` – **이메일 등록/수정**

### 📌 설명  
지갑 주소 기준으로 이메일을 등록하거나 수정합니다.

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

- **URL 예시**: `/api/user/email/0xabc1234567890...`

### ✅ 성공 응답: `200 OK`

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

## ✅ 4. [POST] `/telegram/:address` – **텔레그램 등록/수정**

### 📌 설명  
지갑 주소 기준으로 텔레그램 ID를 등록하거나 수정합니다.

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

- **URL 예시**: `/api/user/telegram/0xabc1234567890...`

### ✅ 성공 응답: `200 OK`

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

## ✅ 공통 에러 응답

```json
{
  "success": false,
  "message": "설명 메시지"
}
```

---
