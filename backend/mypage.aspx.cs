using System;
using System.Web.UI;

namespace WebQuery
{
    public partial class MyPage : Page
    {
        public string Mensagem { get; set; }

        protected void Page_Load(object sender, EventArgs e)
        {
            // Defina a mensagem que você quer mostrar na página
            Mensagem = "string teste do backend";

            // A mensagem será exibida na página através da variável Mensagem
        }
    }
}
