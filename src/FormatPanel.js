import ListGroup from 'react-bootstrap/ListGroup';

var FormatPanel = () => {

    return (
        <div className="coord-panel-container d-flex justify-content-center">
            <div>
                <ListGroup horizontal className="format-list">
                    <ListGroup.Item action active>GeoJSON</ListGroup.Item>
                    <ListGroup.Item action>WKB</ListGroup.Item>
                    <ListGroup.Item action>WKT</ListGroup.Item>
                </ListGroup>
            </div>
            <div className="features-container"></div>
        </div>)
}

export default FormatPanel;
