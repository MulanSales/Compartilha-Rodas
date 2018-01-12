import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 * Conexão do Driver JDBC Java para PostgreSQL
 * @author Luan Miranda Sales
 */

public class DatabaseConnection{
    
   private Connection connection;
   private static DatabaseConnection db; 

   // Instancia uma conexão com o banco de dados, no caso o PostgreSQl
   private DatabaseConnection() {
        
        String url = "jdbc:postgresql://localhost:5432/DB";
        String user = "postgres";
        String password = "postgres";
       
        try {
            Class.forName("org.postgresql.Driver");
        } catch (ClassNotFoundException ex) {
            System.out.println(ex.getMessage());
        }
        
        try {
            connection = DriverManager.getConnection(url, user, password);
            System.out.println("| TESTE BACK |");
            System.out.println("| Conexão ao Banco de Dados Estabelecida |");
        } catch (SQLException ex) {
            System.out.println("Falha ao se conectar" + ex.getMessage());
        }
    }
   
   //Setters e Getters para a conexão ao banco de dados
   public static DatabaseConnection getDatabaseConnection(){
       if(db == null){
           db = new DatabaseConnection();
       }
       return db;
   }
    
   public Connection getConnection(){
       
       return connection;
       
   }
   
}
