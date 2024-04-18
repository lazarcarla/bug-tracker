package com.example.bugtracker.controller;

import com.example.bugtracker.dao.dto.AddBugDto;
import com.example.bugtracker.dao.dto.BugDto;
import com.example.bugtracker.service.BugService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/bugs")
@RequiredArgsConstructor
@RestController
public class BugController {
    private final BugService bugService;

    @GetMapping
    public List<BugDto> getAllBugs(){
        return this.bugService.getAllBugs();
    }

    @GetMapping("/searchUrgency")
    public List<BugDto> getAllBugsByUrgency(@RequestParam String urgency){
        return this.bugService.getAllBugsByUrgency(urgency);
    }

    @PostMapping
    public BugDto addBug(@RequestBody AddBugDto bugDto){
        return this.bugService.addBug(bugDto);
    }

    @PutMapping
    public BugDto updateBug(@RequestBody BugDto bug){
        return this.bugService.updateBug(bug);

    }

    @DeleteMapping("/{id}")
    public BugDto deleteBug(@PathVariable Long id){
        return this.bugService.deleteBug(id);
    }


}
