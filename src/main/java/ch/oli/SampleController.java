package ch.oli;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SampleController {

    @GetMapping("/samples")
    public double[] getSamples(@RequestParam double freq) {
        double[] s = new double[800];
        for (int i = 0; i < 800; i++) {
            double t = i / 8000.;
            s[i] = Math.sin(t * freq * 2 * Math.PI);
        }
        return s;
    }
}
