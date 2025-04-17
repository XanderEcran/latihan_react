function Matkul ({ kode, nama }) {
    return (
        <li style={{ color: kode == 'BD1019' ? 'pink' : 'white' }} >
        {kode} - {nama}
        </li>
    );
}

export default Matkul;