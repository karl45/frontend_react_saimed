import React, { useState, useContext } from 'react'
import { useEffect } from 'react'
import DoctorService from '../../service/DoctorService'
import { AlertContext } from '../../context/AlertContext'
import { Select, MenuItem, FormControl, InputLabel } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    marginTop: {
        marginTop: '15px'
    }
})

const MkbSelect = props => {
    const classes = useStyles()
    const { showError } = useContext(AlertContext)

    const [mkbList, setMkbList] = useState([])

    const { selectedDiagnosis, setSelectedDiagnosis } = props

    const fetchData = async () => {
        try {
            const mkb = await DoctorService.getMkbDiagnosis()
            setMkbList(mkb)
        } catch (err) {
            showError(err)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <FormControl fullWidth className={classes.marginTop}>
            <InputLabel id="select-label">Предварительный диагноз</InputLabel>
            <Select
                labelId="select-label"
                value={selectedDiagnosis}
                onChange={e => setSelectedDiagnosis(e.target.value)}
            >
                {mkbList.map(mkb => 
                    <MenuItem key={mkb.id} value={mkb.id}>({mkb.code}) - {mkb.name}</MenuItem>
                )}
            </Select>
        </FormControl>
    )
}

export default MkbSelect