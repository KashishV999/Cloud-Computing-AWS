
import { UserManager } from "oidc-client-ts";

const cognitoAuthConfig = {
    authority: `https://cognito-idp.us-east-1.amazonaws.com/${process.env.AWS_COGNITO_POOL_ID}`,
    client_id: process.env.AWS_COGNITO_CLIENT_ID,   
    redirect_uri: "http://localhost:1234",
    response_type: "code",
    scope: "phone openid email"
};

// create a UserManager instance
export const userManager = new UserManager({
    ...cognitoAuthConfig,
});

export async function signOutRedirect () {
    const clientId = process.env.AWS_COGNITO_CLIENT_ID;
    const logoutUri = "http://localhost:1234";
    const cognitoDomain = process.env.AWS_COGNITO_DOMAIN;
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
};