interface wbsBoardModel {
    lanes: [
        {
            id: 'lane1',
            title: 'TO DO',
            label: '',
            cards: [],
            hideCardDeleteIcon: true
        },
        {
            id: 'lane2',
            title: 'IN PROGRESS',
            label: '',
            cards: []
        },
        {
            id: 'lane3',
            title: 'DONE',
            label: '',
            cards: []
        }
    ]
}

export default wbsBoardModel;