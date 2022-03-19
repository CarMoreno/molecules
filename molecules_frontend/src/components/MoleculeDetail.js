import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, List, ListItemText, Modal, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24
  };

export function MoleculeDetail({open, setOpen, modalMolecule}) {
    const {name, max_phase, structure, inchi_key} = modalMolecule

    return (
        <div>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Card sx={style}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="200"
                            image="http://via.placeholder.com/640x140"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {name}
                            </Typography>
                            <List>
                                <ListItemText>
                                    <Typography variant="body2" color="text.secondary">
                                        <strong>Structure:</strong> <Typography variant="body2" sx={{color: red[400]}}>{structure} {""}</Typography>
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <strong>Inchi key:</strong> {inchi_key} {""}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <strong>Max phase:</strong> {max_phase} {""}
                                    </Typography>
                                </ListItemText>
                            </List>
                            {/* <Typography variant="body2" color="text.secondary">
                                <strong>Max phase:</strong> {max_phase} {""}
                                <strong>Structure</strong> {structure} {""}
                                <strong>Inchi key:</strong> {inchi_key} {""}
                            </Typography> */}
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button onClick={() => {setOpen(false)}} size="small" color="success">
                            Close
                        </Button>
                    </CardActions>
                </Card>
            </Modal>
        </div>
    )
}