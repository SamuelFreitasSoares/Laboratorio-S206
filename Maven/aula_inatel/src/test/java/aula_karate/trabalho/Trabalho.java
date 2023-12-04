package aula_karate.trabalho;
import com.intuit.karate.junit5.Karate;

class Trabalho {
    @Karate.Test
    Karate testTrabalho() {
        return Karate.run("trab").relativeTo(getClass());
    }
    
}
