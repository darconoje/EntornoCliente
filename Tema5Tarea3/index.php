<html lang="es">
	<head>
		<meta http-equiv="Content-type" content="text/html; charset=UTF-8" />
		<title>Tarea</title>
	    <link rel="stylesheet"
	          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css"
	          integrity="sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy"
	          crossorigin="anonymous">


	    <!-- Incluimos las librerís JS -->
	    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
	            integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
	            crossorigin="anonymous"
	        ></script>
	    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
	            integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
	            crossorigin="anonymous">

	    </script>
	    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js"
	            integrity="sha384-a5N7Y/aK3qNeh15eJKGWxsqtnX/wWdSZSKp+81YjTmS15nvnvxKHuzaWwXHDli+4"
	            crossorigin="anonymous">
	    </script>
		<script src="funciones.js" defer></script>
	</head>

	<body>
		<?php
		   require_once 'datosMYSQL.php';
		?>
		<div id="spinner">
			<div class="text-center">
			  <div class="spinner-border" role="status">
			    <span class="sr-only">Loading...</span>
			  </div>
			</div>			
		</div>

		<div>
		    <h1>FORMULARIO SELECT</h1>
		    <form id="formularioSelect" action="">

			    <div>
			    	<label for="selectSO">Sistema Operativo:</label>
			    	<select id="selectSO" name="selectSO">
			    		<option value="">-Selecciona SO-</option>
			    		<option value="BSD">BSD</option>
			    		<option value="Linux">Linux</option>
			    		<option value="Solaris">Solaris</option>
			    	</select>
			    </div>   

			    <div>
			    	<label for="selectResultado">Distribuciones Resultantes:</label>
			    	<select id="selectResultado" name="selectResultado">

			    	</select>
			    </div>

		    </form>
		</div>
		<div>
		    <h1>FORMULARIO ACTUALIZAR</h1>
		    <form id="formularioActualizar" action="">

		    	<div>
		    		<label for="selectDistribucion">Selecciona la distribución a editar:</label>
		    		<select id="selectDistribucion" name="selectDistribucion">
			    			<?php
						        while($distribucion2 = $distribuciones2->fetch_assoc()) {
						            ?>
						            
						            	<?php 
						            				echo "<option value='".$distribucion2["nombre"]."'>". $distribucion2["nombre"]."</option>";

						            	?>
						            		
						               
						            <?php
						        }
						    ?>	 
			    	</select>
		    	</div>

			    <div>
			        <label for="nombre">Nombre:</label>
			        <input type="text" value="" name="nombre" id="nombre" />
			        <div class="divErrores">
                   
	                </div>		        
			    </div>    

			    <div>
			    	<label for="so">Sistema Operativo:</label>
			    	<select id="so" name="so">
			    		<option value="BSD">BSD</option>
			    		<option value="Linux">Linux</option>
			    		<option value="Solaris">Solaris</option>
			    	</select>    	
			    </div>
			    <div>
			        <label for="origen">Origen:</label>
			        <input type="text" value="" name="origen" id="origen" />
			        <div class="divErrores">
	                    
	                </div>	
			    </div> 
		    
			    <div>
			        <label for="tamaño">Tamaño:</label>
			        <input type="text" value="" name="tamaño" id="tamaño" />
	                <div class="divErrores">
	                    
	                </div>			        
			    </div>

			    <div>
			    	<label for="estado">Estado:</label>
			    	<select id="estado" name="estado">
			    		<option value="Activo">Activo</option>
			    		<option value="Durmiente">Durmiente</option>
			    		<option value="Discontinuado">Discontinuado</option>
			    	</select>  
			    </div> 	

			    <input type="submit" id="botonActualizar" value="ACTUALIZAR DISTRIBUCIÓN" />

		    </form>
		</div>		
		<div id="resultado">

		</div>	
		<div>
			<h1>TABLA ELIMINAR DISTRIBUCION</h1>
			<table class="table" id="tablaEliminar">
			  <thead>
			    <tr>
			      <th scope="col">Nombre</th>
			      <th scope="col">Sistema Operativo</th>
			      <th scope="col">Origen</th>
			      <th scope='col'>Tamaño (MB)</th>
			      <th scope='col'>Estado</th>
			    </tr>
			    </thead>
			  <tbody>
			    <?php
			        while($distribucion = $distribuciones->fetch_assoc()) {
			            ?>
			            <tr data-idDistribucion="<?php echo $distribucion["nombre"]; ?>">
			            	<td><?php echo $distribucion["nombre"]; ?></td>
			                <td><?php echo $distribucion["so"]; ?></td>
			                <td><?php echo $distribucion["origen"]; ?></td>
			                <td><?php echo $distribucion["tamaño"]; ?></td>
			                <td><?php echo $distribucion["estado"]; ?></td>
			                <td><button data-idEliminar="<?php echo $distribucion["nombre"]; ?>" data-accion="eliminar">Eliminar</button></td>
			            </tr>    
			            <?php
			        }
			    ?>
			</tbody>
			</table>
		</div>
		<div id="modalEliminar" class="modal" tabindex="-1" role="dialog">
		  <div class="modal-dialog" role="document">
		    <div class="modal-content">
		      <div class="modal-header">
		        <h5 class="modal-title">Eliminar Distribucion</h5>
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		      </div>
		      <div class="modal-body">
		        <p>¿Estás seguro de eliminar esta distribucion?</p>
		      </div>
		      <div class="modal-footer">
		        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
		        <button id="botonConfirmarEliminar" type="button"  class="btn btn-primary" data-accion="confirmar-eliminar" data-ideliminar="">Confirmar</button>
		      </div>
		    </div>
		  </div>
		</div>		
	</body>
</html>