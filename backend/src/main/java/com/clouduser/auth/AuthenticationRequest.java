package com.clouduser.auth;

public record AuthenticationRequest(
        String username,
        String password
) {
}
