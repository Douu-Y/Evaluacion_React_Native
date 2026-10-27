import { StyleSheet, Text, View, Pressable, Image} from 'react-native';

export default function CardProducto({ nombre, descripcion, stock, categoria, precio }) {
return (
    <View style={styles.card}>
    <View style={styles.imagePlaceholder} />

    <View style={styles.contentContainer}>
        <View style={styles.filaSuperior}>
        <Text style={styles.nombre} numberOfLines={1}>{nombre}</Text>
        <Text style={styles.categoria}>{categoria}</Text>
        </View>

        <Text style={styles.descripcion} numberOfLines={2}>{descripcion}</Text>

        <View style={styles.filaInferior}>
        <Text style={styles.stock}>Stock: {stock}</Text>
        <Text style={styles.precio}>$ {precio}</Text>
        </View>

        <Pressable style={styles.botonCarrito}>
        <Text style={styles.textoBotonCarrito}>Agregar al carrito</Text>
        </Pressable>
    </View>
    </View>
);
}

const styles = StyleSheet.create({
card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    overflow: 'hidden',
    width: '48%',
    marginHorizontal: '1%',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
},

imagePlaceholder: {
    height: 90,
    backgroundColor: '#CBD5E1',
    width: '100%',
},

contentContainer: {
    padding: 12,
},

filaSuperior: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
},
nombre: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    flex: 1,
},
categoria: {
    backgroundColor: '#7FFFD4',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 20,
    fontSize: 12,
    overflow: 'hidden',
},
descripcion: {
    marginVertical: 8,
    color: '#444444',
},
filaInferior: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
},
stock: {
    color: '#666666',
},
precio: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#134E4A',
},
botonCarrito: {
    backgroundColor: '#7FFFD4',
    paddingVertical: 10,
    borderRadius: 30,
    alignItems: 'center',
},
textoBotonCarrito: {
    fontWeight: 'bold',
    color: '#000000',
},
});