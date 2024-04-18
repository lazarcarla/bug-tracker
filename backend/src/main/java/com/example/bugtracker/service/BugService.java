package com.example.bugtracker.service;

import com.example.bugtracker.dao.dto.AddBugDto;
import com.example.bugtracker.dao.dto.BugDto;
import com.example.bugtracker.dao.dto.UserDto;
import com.example.bugtracker.dao.mapper.BugMapper;
import com.example.bugtracker.dao.mapper.UserMapper;
import com.example.bugtracker.dao.model.Bug;
import com.example.bugtracker.dao.model.User;
import com.example.bugtracker.repository.BugRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeFormatterBuilder;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BugService {
    private final BugRepository bugRepository;

    public List<BugDto> getAllBugs(){
        List<Bug> bugs = (List<Bug>) this.bugRepository.findAll();
        return BugMapper.mapToDtoList(bugs);
    }

    public BugDto addBug(AddBugDto bugDto){
        DateTimeFormatter formatter = new DateTimeFormatterBuilder().appendPattern("yyyy-MM-dd").toFormatter();

        Bug bug = Bug.builder()

                .title(bugDto.title())
                .description(bugDto.description())
                .date(LocalDate.parse(bugDto.date(), formatter))
                .urgency(bugDto.urgency())
                .build();

        Bug savedBug = this.bugRepository.save(bug);
        return BugMapper.mapToDto(savedBug);
    }

    public BugDto updateBug(BugDto bug){
        return BugMapper.mapToDto(this.bugRepository.save(BugMapper.mapToModel(bug)));
    }

    public BugDto deleteBug(Long id) {
        Bug bug = this.bugRepository.findById(id).orElseThrow();
        this.bugRepository.delete(bug);
        return BugMapper.mapToDto(bug);
    }

    public List<BugDto> getAllBugsByUrgency(String urgency){
        List<Bug> bugs = this.bugRepository.findAllByUrgency(urgency);
        return BugMapper.mapToDtoList(bugs);
    }
}
