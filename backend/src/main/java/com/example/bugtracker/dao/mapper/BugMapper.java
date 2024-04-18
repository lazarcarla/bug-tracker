package com.example.bugtracker.dao.mapper;
import com.example.bugtracker.dao.dto.BugDto;
import com.example.bugtracker.dao.model.Bug;


import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeFormatterBuilder;
import java.util.List;

public class BugMapper {
    public static BugDto mapToDto(Bug bug){
        return BugDto.builder()
                .id(bug.getBugId())
                .title(bug.getTitle())
                .description(bug.getDescription())
                .date(bug.getDate().toString())
                .urgency(bug.getUrgency())
                .build();
    }

    public static Bug mapToModel(BugDto bugDto){
        DateTimeFormatter formatter = new DateTimeFormatterBuilder().appendPattern("yyyy-MM-dd").toFormatter();

        return Bug.builder()
                .bugId(bugDto.id())
                .title(bugDto.title())
                .description(bugDto.description())
                .date(LocalDate.parse(bugDto.date(), formatter))
                .urgency(bugDto.urgency())
                .build();
    }

    public static List<BugDto> mapToDtoList(List<Bug> bugs){
        return bugs.stream()
                .map(BugMapper::mapToDto)
                .toList();
    }
}
