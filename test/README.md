#  Day 1 – Cloud Learning Series  
## AWS Cognito Authentication Flow

This repository is part of my **100 Days of Cloud Computing** learning series, where I document my progress by cloud concepts step by step.

**Day 1**:  I focused on understanding **authentication in the cloud** using **AWS Cognito**

---

## What I Worked On

In this project, I implemented:

- AWS Cognito **User Pool**
- Cognito **Hosted UI**
- OAuth 2.0 **Authorization Code Flow**
- JWT-based authentication:
  - ID Token
  - Access Token
  - Refresh Token
- Client-side authentication using `oidc-client-ts`


---

## Authentication Flow (High-Level)

1. User clicks **Sign In**
2. App redirects to **AWS Cognito Hosted UI**
3. User authenticates with Cognito
4. Cognito redirects back with an **authorization code**
5. The app exchanges the code for:
   - ID Token
   - Access Token
   - Refresh Token
6. Tokens are used for authenticated requests

