package com.example.therecipecatalogue;

import com.example.therecipecatalogue.auth.AuthenticationRequest;
import com.example.therecipecatalogue.auth.AuthenticationService;
import com.example.therecipecatalogue.auth.RegisterRequest;
import com.example.therecipecatalogue.user.Role;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
public class TheRecipeCatalogueApplication {

	public static void main(String[] args) {
		SpringApplication.run(TheRecipeCatalogueApplication.class, args);
	}
/*
	@GetMapping(value = {"/", "/{path:[^\\.]*}"})
	public String index() {
		return "index";
	}
	*/


	//@GetMapping(value = "/**/{path:[^\\.]*}")
	/*public String forward() {
		return "forward:/";
	}*/

	/*
	@Bean
	public CommandLineRunner commandLineRunner(AuthenticationService service) {
		return args -> {
			var user = AuthenticationRequest.builder()
					.userName("aaa")
					.password("123")
					//.role(Role.USER)
					.build();
			System.out.println("Maaaaaaaaaaaaaaaaaaaaaaaanager token: " + service.authenticate(user).getAccessToken() + " TTTTT " + user.getUserName());

		};
	}*/

}
