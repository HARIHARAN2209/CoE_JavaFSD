import java.io.*;
import java.util.*;

class LogFileAnalyzer {
    private Set<String> keywords;
    
    public LogFileAnalyzer(Set<String> keywords) {
        this.keywords = keywords;
    }
    
    public void analyzeLogFile(String inputFile, String outputFile) {
        Map<String, Integer> keywordCount = new HashMap<>();
        for (String keyword : keywords) {
            keywordCount.put(keyword, 0);
        }
        
        try (BufferedReader reader = new BufferedReader(new FileReader(inputFile));
             BufferedWriter writer = new BufferedWriter(new FileWriter(outputFile))) {
            
            String line;
            while ((line = reader.readLine()) != null) {
                for (String keyword : keywords) {
                    if (line.contains(keyword)) {
                        keywordCount.put(keyword, keywordCount.get(keyword) + 1);
                        writer.write(line);
                        writer.newLine();
                        break;
                    }
                }
            }
            
 writer.write("\nSummary:\n");
            for (Map.Entry<String, Integer> entry : keywordCount.entrySet()) {
                writer.write(entry.getKey() + ": " + entry.getValue());
                writer.newLine();
            }
            
        } catch (IOException e) {
            System.err.println("Error processing the log file: " + e.getMessage());
        }
    }
    
    public static void main(String[] args) {
        Set<String> keywords = new HashSet<>(Arrays.asList("ERROR", "WARNING"));
        LogFileAnalyzer analyzer = new LogFileAnalyzer(keywords);
        analyzer.analyzeLogFile("input.log", "output.log");
        System.out.println("Log analysis complete. Check output.log for details.");
    }
}