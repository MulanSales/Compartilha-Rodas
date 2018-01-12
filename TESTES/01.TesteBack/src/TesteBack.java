import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Random;

/**
 * Classe Principal - Sistema Batch
 * @author Luan Miranda Sales
 */
public class TesteBack {
    
    // Método principal para a chamada dos métodos auxiliares
    public static void main(String args[]){
       
        DatabaseConnection db = DatabaseConnection.getDatabaseConnection();
        Connection connection = db.getConnection();
  
        try {
            createTableCustomer(connection);
            insertInDatabase(connection);
            calcMean(connection);
        } catch (SQLException ex) {
            System.out.println(ex.getMessage());
        }  
    }
    
    // Metódo para a criação da tabela tb_customer_account
    private static void createTableCustomer(Connection con) throws SQLException{
        
        DatabaseMetaData md = con.getMetaData();
        ResultSet rs = md.getTables(null, null, "tb_customer_account", null);
        
        if(rs.next()){
            System.out.println("| A tabela tb_customer_account já existe no Banco de Dados |");
            return;
        }
        
        Statement s = con.createStatement();
        
        String table = "CREATE TABLE tb_customer_account" +
                        "(id_customer INTEGER NOT NULL," +
                        " cpf_cnpj VARCHAR(15) NOT NULL," +
                        " nm_customer VARCHAR(50) NOT NULL," +
                        " is_active BOOLEAN NOT NULL," +
                        " vl_total DECIMAL(13,2)," +
                        " PRIMARY KEY(id_customer))";
        s.executeUpdate(table);
        System.out.println("| Criação da Tabela tb_customer_account |\n");
    }
    
    // Insere valores no banco de dados através da conexão passada como parâmetro
    private static void insertInDatabase(Connection con) throws SQLException{
       
        PreparedStatement ps;
        Random gerador = new Random();
        String data = "INSERT INTO tb_customer_account(id_customer, cpf_cnpj, nm_customer, is_active, vl_total) VALUES" + "(?, ?, ?, ?, ?)";
      
        try{     
            ps = con.prepareStatement(data);
            con.setAutoCommit(false);
            
            // Algumas adições manuais para fins de representações reais de dados e suas variações
            // Todo conjunto de dados da tabela são armazenados em um batch para posterior execução e armazenamento
            // no banco de dados
            ps.setInt(1, 1550);
            ps.setString(2, "5898567585");
            ps.setString(3, "Ricardo Silva");
            ps.setBoolean(4, false);
            ps.setInt(5, 1530);
            ps.addBatch();
            
            ps.setInt(1, 1560);
            ps.setString(2, "1898575885");
            ps.setString(3, "Paulo Sousa");
            ps.setBoolean(4, false);
            ps.setInt(5, 752);
            ps.addBatch();
            
            ps.setInt(1, 1700);
            ps.setString(2, "2398567584");
            ps.setString(3, "Mariana Silva");
            ps.setBoolean(4, false);
            ps.setInt(5, 1750);
            ps.addBatch();
            
            ps.setInt(1, 1800);
            ps.setString(2, "1798567585");
            ps.setString(3, "Carlos Caetano");
            ps.setBoolean(4, true);
            ps.setInt(5, 450);
            ps.addBatch();
            
            ps.setInt(1, 1801);
            ps.setString(2, "75898569887");
            ps.setString(3, "Ricardo Sousa");
            ps.setBoolean(4, true);
            ps.setInt(5, 1900);
            ps.addBatch();
            
            ps.setInt(1, 1954);
            ps.setString(2, "15858745898");
            ps.setString(3, "João Silva");
            ps.setBoolean(4, false);
            ps.setInt(5, 590);
            ps.addBatch();

            ps.setInt(1, 2254);
            ps.setString(2, "69885963256");
            ps.setString(3, "Silvana Montes");
            ps.setBoolean(4, true);
            ps.setInt(5, 560);
            ps.addBatch();
            
            ps.setInt(1, 2489);
            ps.setString(2, "28525895688");
            ps.setString(3, "Carlos Alberto de Nobrega");
            ps.setBoolean(4, true);
            ps.setInt(5, 5000);
            ps.addBatch();
            
            ps.setInt(1, 2490);
            ps.setString(2, "74589662311");
            ps.setString(3, "Silvio Santos");
            ps.setBoolean(4, false);
            ps.setInt(5, 10000);
            ps.addBatch();
            
            ps.setInt(1, 2700);
            ps.setString(2, "44478596585");
            ps.setString(3, "Roberto Carlos");
            ps.setBoolean(4, true);
            ps.setInt(5, 720);
            ps.addBatch();
            
            ps.setInt(1, 7500);
            ps.setString(2, "14155896585");
            ps.setString(3, "Marcelo Silva");
            ps.setBoolean(4, false);
            ps.setInt(5, 2530);
            ps.addBatch();
            
            ps.setInt(1, 7300);
            ps.setString(2, "78548596522");
            ps.setString(3, "Lurdes Maria de Carvalho");
            ps.setBoolean(4, true);
            ps.setInt(5, 1530);
            ps.addBatch();
            
            ps.setInt(1, 7452);
            ps.setString(2, "99855633225");
            ps.setString(3, "Enzo Batista");
            ps.setBoolean(4, true);
            ps.setInt(5, 2700);
            ps.addBatch();
           
            ps.setInt(1, 9320);
            ps.setString(2, "69856358898");
            ps.setString(3, "Antônio Silva");
            ps.setBoolean(4, false);
            ps.setInt(5, 6520);
            ps.addBatch();
            
            ps.setInt(1, 1500);
            ps.setString(2, "12512314759");
            ps.setString(3, "Francisco Silva");
            ps.setBoolean(4, false);
            ps.setInt(5, 2520);
            ps.addBatch(); 
            
            ps.setInt(1, 1400);
            ps.setString(2, "88856525965");
            ps.setString(3, "Paulo Soares Silva");
            ps.setBoolean(4, true);
            ps.setInt(5, 570);
            ps.addBatch(); 
 
            // Executa o batch e envia os dados para o SGBD, no caso o PostgreSQL
            try{
                ps.executeBatch();
                System.out.println("| Dados em Batch Executados - Transferência para o BD |\n");
            }
            catch(SQLException ex){
                System.out.println("| Algum dado no Batch já foi inserido - Pulando etapa |\n");
            }
            con.commit();       
        }
        catch(SQLException ex){
            System.out.println(ex.getMessage());
            con.rollback();
        }
    }
   
    // Seleciona e imprime todos os clientes dados a condição do teste e calcula a média dos sálarios
    private static void calcMean(Connection con) throws SQLException{
       
        String data = "SELECT * FROM tb_customer_account WHERE vl_total>560 AND id_customer BETWEEN 1500 AND 2700 ORDER BY vl_total DESC";

        Statement s = con.createStatement();
        ResultSet rs = s.executeQuery(data);
        int nr_customers = 0;
        double v_final = 0;
        
        System.out.println("| Clientes em Ordem Decrescente de saldo |");
        System.out.println("------------------------------------------------");
        System.out.println("Cliente #ID: CPF/CNPJ -- NOME -- STATUS -- SALDO");
        System.out.println("------------------------------------------------");
        
        while(rs.next()){
            
            int id_customer = rs.getInt(1);
            String cpf_cnpj = rs.getString(2);
            String nm_customer = rs.getString(3);
            boolean is_active = rs.getBoolean(4);
            
            int vl_total = rs.getInt(5);
            nr_customers++;
            v_final += vl_total;
            
            String output = "Cliente #%d: %s -- %s -- %b -- %d ";
            System.out.println(String.format(output, id_customer, cpf_cnpj, nm_customer, is_active, vl_total));
        }     
        System.out.println("\n| MÉDIA DOS SALDOS: " + v_final/nr_customers + " |\n");
    }
}
