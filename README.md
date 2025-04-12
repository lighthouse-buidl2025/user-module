
## 📌 Base URL

```
http://localhost:8081/api/user
```

---

## 📂 API Endpoints

### ✅ [POST] `/signup` - 지갑 주소로 회원가입

지갑 주소로 유저를 최초 등록합니다.

- **Request**
  - `Content-Type: application/json`
  - `Body`:

    ```json
    {
      "address": "0xabc1234567890..."
    }
    ```

- **Response (201)**

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

- **Error (409)**

    ```json
    {
      "success": false,
      "message": "User already exists"
    }
    ```

---

### ✅ [GET] `/:address` - 유저 정보 조회

지갑 주소로 유저 정보를 조회합니다.

- **Example**: `/api/user/0xabc123...`

- **Response (200)**

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

- **Error (404)**

    ```json
    {
      "success": false,
      "message": "User not found"
    }
    ```

---

### ✅ [POST] `/email/:address` - 이메일 등록/수정

해당 지갑 주소에 이메일을 등록하거나 수정합니다.

- **Request**
  - `Content-Type: application/json`
  - `Body`:

    ```json
    {
      "email": "daniel@example.com"
    }
    ```

- **Response (200)**

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

### ✅ [POST] `/telegram/:address` - 텔레그램 등록/수정

해당 지갑 주소에 텔레그램 ID를 등록하거나 수정합니다.

- **Request**
  - `Content-Type: application/json`
  - `Body`:

    ```json
    {
      "telegram": "@daniel_eth"
    }
    ```

- **Response (200)**

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

## 🧱 User 스키마 구조

```ts
{
  address: string,      // 지갑 주소 (소문자 저장)
  email: string,        // 이메일 (optional)
  telegram: string,     // 텔레그램 ID (optional)
  createdAt: Date       // 등록 시각
}
```
