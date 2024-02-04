import React, {useState, ChangeEvent, FormEvent} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {useTypedSelector} from "../store";
import {addOrderToServer} from "../services/api.ts";

export interface FormData {
    customerName: string;
    email: string;
    address: string;
}

export interface OrderData extends FormData {
    orderItemsJson: string
}

const OrderForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        customerName: '',
        email: '',
        address: '',
    });
    const {items} = useTypedSelector((state) => state.reducer)

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data:OrderData = {...formData, orderItemsJson: JSON.stringify(items)}
        console.log('Form submitted:', data);
        await addOrderToServer(data)
    };

    return (
        <Grid container justifyContent="center" alignItems="center" style={{minHeight: '50vh'}}>
            <Grid item xs={12} sm={8} md={6} lg={4}>
                <Typography variant="h4" gutterBottom>
                    Order Form
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Name"
                        name="customerName"
                        variant="outlined"
                        margin="normal"
                        value={formData.customerName}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        variant="outlined"
                        margin="normal"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        fullWidth
                        label="Address"
                        name="address"
                        variant="outlined"
                        margin="normal"
                        multiline
                        rows={4}
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Submit
                    </Button>
                </form>
            </Grid>
        </Grid>
    );
};

export default OrderForm;
