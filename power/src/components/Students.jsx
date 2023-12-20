import Average from './Average'
const Students=  () => {
        const students = [
        {mark: [10, 11, 12, 10], name: 'Alice'},
        {mark: [9, 8, 9], name: 'Bob'},
        {mark: [10, 9, 9], name: 'Jean'},
        {mark: [11, 12, 13], name: 'Kevin'},
        {mark: [13, 12, 14], name: 'Dylan'},
        {mark: [15, 16, 17], name: 'Paul'},
        {mark: [18, 17, 16], name: 'Marie'},
        {mark: [15, 16, 15], name: 'Julie'},
        {mark: [8, 7, 9], name: 'Lucie'},
        {mark: [10, 11, 12], name: 'Louise'}
    ]

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Prénom</th>
                        <th>Moyenne</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={index}>
                            <td>{student.name}</td>
                            <td>
                                <Average mark={student.mark} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

    
export default Students