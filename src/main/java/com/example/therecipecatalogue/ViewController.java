package com.example.therecipecatalogue;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class ViewController {

    //@GetMapping(value = { "/" , "/{path:[^\\.]*}"})
    @GetMapping(value = {   "/" ,
                            "/signIn",
                            "/signUp",
                            "/recipes",
                            "/recipes/recipe",
                            //"/recipes/recipe/{path:[^\\.]*}",
                            //"/recipes/recipe/{id:[^\\.]*}",
                            "/about",
                            "/contact"
                        })

    public String index() {
        return "index.html";
    }

    //@GetMapping(value = { "/" , "/{path:[^\\.]*}"})
    @GetMapping(value = {"/recipes/recipe/*"})

    public String recipe() {
        return "../../index.html";
    }
}
