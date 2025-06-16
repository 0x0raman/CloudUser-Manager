package com.clouduser.customer;

public record CustomerUpdateRequest(
        String name,
        String email,
        Integer age
) {
}
