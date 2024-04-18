package com.example.bugtracker.dao.mapper;

import com.example.bugtracker.dao.dto.UserDto;
import com.example.bugtracker.dao.model.User;

import java.util.List;

public class UserMapper {
    public static UserDto mapToDto(User user){
        return UserDto.builder()
                .id(user.getUserId())
                .username(user.getUsername())
                .password(user.getPassword())
                .role(user.getRole())
                .build();
    }

    public static User mapToModel(UserDto userDto){
        return User.builder()
                .userId(userDto.id())
                .username(userDto.username())
                .password(userDto.password())
                .role(userDto.role())
                .build();
    }

    public static List<UserDto> mapToDtoList(List<User> users){
        return users.stream()
                .map(UserMapper::mapToDto)
                .toList();
    }
}
