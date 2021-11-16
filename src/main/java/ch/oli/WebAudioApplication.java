package ch.oli;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@SpringBootApplication
@EnableWebMvc
public class WebAudioApplication {
    public static void main(String[] args) {
        SpringApplication.run(WebAudioApplication.class, args);
    }
}
