# BUGS REPORT

## [PUT] /users/{email} - update user

| SCENARIO | ENVIRONMENT | EXPECTED RESULT | ACTUAL RESULT | ISSUE DESCRIPTION |
| :--- | :--- | :--- | :--- | :--- |
| **STATUS CODE 400 (EMPTY EMAIL)** | DEV/PROD | The request must return: `{ "error": "User not found" }` and status code 400. | The request returned: `{ "error": "email is required" }`. | The endpoint returned “email is required” instead of "User not found". |
| **STATUS CODE 400 (INVALID EMAIL)** | DEV/PROD | The request must return: `{ "error": "User not found" }` and status code 400. | The request returned: `{ "error": "Invalid email format" }`. | The endpoint returned “Invalid email format” instead of "User not found". |
| **STATUS CODE 400 (EMPTY NAME)** | DEV/PROD | The request must return: `{ "error": "User not found" }` and status code 400. | The request returned: `{ "error": "name is required" }`. | The endpoint returned “name is required” instead of "User not found". |
| **STATUS CODE 400 (EMPTY AGE)** | DEV/PROD | The request must return: `{ "error": "User not found" }` and status code 400. | The request returned: `{ "error": "Age must be between 1 and 150" }`. | The endpoint returned “Age must be between 1 and 150” instead of "User not found". |
| **STATUS CODE 400 (INVALID AGE)** | DEV/PROD | The request must return: `{ "error": "User not found" }` and status code 400. | The request returned: `{ "error": "Age must be between 1 and 150" }`. | The endpoint returned “Age must be between 1 and 150” instead of "User not found". |
| **STATUS CODE 400 (AGE OUT OF RANGE)** | DEV/PROD | The request must return: `{ "error": "User not found" }` and status code 400. | The request returned: `{ "error": "Age must be between 1 and 150" }`. | The endpoint returned “Age must be between 1 and 150” instead of "User not found". |
| **STATUS CODE 409 (DUPLICATED EMAIL)** | DEV/PROD | The request must return: `{ "error": "User not found" }` and status code 409. | The request returned: `{ "error": "Email already exists" }`. | The endpoint returned “Email already exists” instead of "User not found". |

---

## [Post] /users - create a new user

| SCENARIO | ENVIRONMENT | EXPECTED RESULT | ACTUAL RESULT | ISSUE DESCRIPTION |
| :--- | :--- | :--- | :--- | :--- |
| **STATUS CODE 400 (EMPTY AGE)** | DEV/PROD | The request must return: `{ "error": "User not found" }` and status code 400. | The request returned: `{ "error": "Age must be between 1 and 150" }`. | The endpoint returned “Age must be between 1 and 150” instead of "User not found". |
| **STATUS CODE 400 (INVALID AGE)** | DEV/PROD | The request must return: `{ "error": "User not found" }` and status code 400. | The request returned: `{ "error": "Age must be between 1 and 150" }`. | The endpoint returned “Age must be between 1 and 150” instead of "User not found". |
| **STATUS CODE 400 (AGE OUT OF RANGE)** | DEV/PROD | The request must return: `{ "error": "User not found" }` and status code 400. | The request returned: `{ "error": "Age must be between 1 and 150" }`. | The endpoint returned “Age must be between 1 and 150” instead of "User not found". |
| **STATUS CODE 400 (EMPTY EMAIL)** | DEV/PROD | The request must return: `{ "error": "User not found" }` and status code 400. | The request returned: `{ "error": "email is required" }`. | The endpoint returned “email is required” instead of "User not found". |
| **STATUS CODE 400 (EMPTY NAME)** | DEV/PROD | { "error": "User not found" } and status code 400. | The request returned: `{ "error": "name is required" }`. | The endpoint returned “name is required” instead of "User not found". |
| **STATUS CODE 409 (DUPLICATED EMAIL)** | DEV/PROD | The request must return: `{ "error": "User not found" }` and status code 409. | Returned `{ "error": "Internal server error" }` and status code 500. | The endpoint returned 500 instead of "User not found" (409). |

---

## [DELETE] /users/{email} - DELETE user

| SCENARIO | ENVIRONMENT | EXPECTED RESULT | ACTUAL RESULT | ISSUE DESCRIPTION |
| :--- | :--- | :--- | :--- | :--- |
| **STATUS CODE 204 (DELETE USER)** | DEV/PROD | The request must return: `{ "error": "User not found" }` and status code 204. | No error returned. | No error returned. |
| **STATUS CODE 401 (INVALID AUTH TOKEN)** | DEV/PROD | The request must return: `{ "error": "User not found" }` and status code 401. | No error message, returned status code 204. | Should return "User not found" in JSON format, but returned 204. |
| **STATUS CODE 401 (EMPTY AUTH TOKEN)** | DEV/PROD | The request must return: `{ "error": "User not found" }` and status code 401. | No error message, returned status code 204. | Should return "User not found" in JSON format, but returned 204. |
| **STATUS CODE 404 (NO EXISTING EMAIL)** | PROD | The request must return: `{ "error": "User not found" }` and status code 404. | Returned `{ "error": "Internal server error" }` and status code 500. | The endpoint returned 500 instead of "User not found" (404). |

---

## [GET] /users/{email} - get a user by email

| SCENARIO | ENVIRONMENT | EXPECTED RESULT | ACTUAL RESULT | ISSUE DESCRIPTION |
| :--- | :--- | :--- | :--- | :--- |
| **STATUS CODE 404 (NOT EXISTING EMAIL)** | DEV/PROD | The request must return: `{ "error": "User not found" }` and status code 404. | Returned `{ "error": "Internal server error" }` and status code 500. | The endpoint returned 500 instead of "User not found" (404). |
| **STATUS CODE 404 (EMPTY EMAIL)** | DEV/PROD | The request must return: `{ "error": "User not found" }` and status code 404. | Returned `{ "error": "Internal server error" }` and status code 500. | The endpoint returned 500 instead of "User not found" (404). |
