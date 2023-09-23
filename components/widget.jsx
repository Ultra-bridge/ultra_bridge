let greeting = "Have a great day";

return (
  <>
    <div class="container border border-info p-3 d-flex align-items-center">
      <div class="container border rounded">
        <div class="d-flex align-items-center justify-content-start">
          <button class="btn btn-primary">Swap</button>
          <button class="btn btn-primary">Bridge</button>
          <p className="justify-self-end text-right">Near</p>
        </div>
        <div>
          {/* {First Box} */}
          <div class="container border rounded bg-gray d-flex">
            <div class="container">
              <p>Send</p>
              <p>120</p>
            </div>
            <div class="container border border-radius-3">
              <p>120.54</p>
              <div></div>
            </div>
          </div>
          {/* {Second Box} */}
          <div class="container border border-radius-3">
            <div class="container border border-radius-3">
              <p>Send</p>
              <p>120.54</p>
            </div>
            <div class="container border border-radius-3">
              <p>120</p>
              <div></div>
            </div>
          </div>
          {/* {Swith Button} */}
          <button class="btn btn-primary">Switch</button>
        </div>

        {/* {Swap/Bridge Button} */}
        <button class="btn btn-primary">Swap</button>
      </div>
    </div>
  </>
);
