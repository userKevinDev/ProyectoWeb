using Newtonsoft.Json;
using System.Collections.Generic;
using System;
namespace Proyect.Models
{
    public class Factura
    {
        
        [JsonProperty("codigoFactura")]
        public string FacturaId { get; set; }
        [JsonProperty("fechaFactura")]
        public DateTime Fecha { get; set; }
        public Cliente Cliente { get; set; }
        [JsonProperty("listaDetalles")]
        public List<FacturaDetalle> Detalles { get; set; }
        [JsonProperty("totalCompra")]
        public double TotalCompra { get; set; }

    }
}