import React from "react";
import "./Modal.css"

const Modal = props => (
    <div id="myModal" class="modal fade" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal"></button>
            <h2 class="modal-title">Game status</h2>
          </div>
          <div class="modal-body text-center">
            <h2 id="nameOfMatch"></h2>
            <p id="imageHolder"></p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
      </div>
    </div>
  </div>
);

export default Modal;