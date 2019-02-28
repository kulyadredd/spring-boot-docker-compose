package com.app.springbootdockercompose.entity.enums;

public enum Role {
    USER, ADMIN;

    public static Role of(String value){
        if(value == null) return null;
        for(Role r: Role.values()){
            if(r.toString().equals(value)){
                return r;
            }
        }
        return null;
    }
}
